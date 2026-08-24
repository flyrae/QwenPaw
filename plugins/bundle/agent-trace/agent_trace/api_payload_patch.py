# -*- coding: utf-8 -*-
"""Intercept the OpenAI SDK's chat.completions.create call to capture
the **actual API payload** — the formatted messages AFTER the provider
formatter has run (including role=tool results, merged system prompts,
and the exact dicts sent over the wire).

This complements the middleware-level capture (which sees AgentScope
Msg objects before formatting) with the wire-level truth, using the
same wrapt-based technique as Langfuse's OpenAI integration.

Lifecycle: apply_api_payload_patch() at plugin startup,
restore_api_payload_patch() at shutdown/uninstall.
"""
from __future__ import annotations

import logging
from typing import Any

logger = logging.getLogger("qwenpaw.plugins.agent_trace")

_WRAPPER_ATTR = "_agent_trace_api_payload_wrapper"
_TARGETS = [
    ("openai.resources.chat.completions",
     "AsyncCompletions.create"),
    ("openai.resources.chat.completions",
     "Completions.create"),
]


def _safe_extract_messages(kwargs: dict) -> list:
    """Pull the messages list from create() kwargs without crashing."""
    msgs = kwargs.get("messages")
    if not isinstance(msgs, list):
        return []
    out = []
    for m in msgs:
        if not isinstance(m, dict):
            # openai may use pydantic models; best-effort dict conversion
            if hasattr(m, "model_dump"):
                try:
                    m = m.model_dump(exclude_none=True)
                except Exception:  # noqa: BLE001
                    m = {"role": "?", "content": str(m)[:200]}
            else:
                m = {"role": "?", "content": str(m)[:200]}
        out.append(m)
    return out


def _safe_extract_params(kwargs: dict) -> dict:
    """Extract model/temperature/etc for the event payload."""
    keys = ("model", "temperature", "top_p", "max_tokens", "stream",
            "tool_choice", "response_format")
    return {k: kwargs[k] for k in keys if kwargs.get(k) is not None}


def _extract_usage(response: Any) -> dict | None:
    """Best-effort usage extraction from a ChatCompletion or the last
    streamed chunk."""
    usage = getattr(response, "usage", None)
    if usage is None and isinstance(response, dict):
        usage = response.get("usage")
    if usage is None:
        return None
    if isinstance(usage, dict):
        return {
            "input_tokens": usage.get("prompt_tokens", 0),
            "output_tokens": usage.get("completion_tokens", 0),
            "total_tokens": usage.get("total_tokens", 0),
        }
    return {
        "input_tokens": getattr(usage, "prompt_tokens", 0) or 0,
        "output_tokens": getattr(usage, "completion_tokens", 0) or 0,
        "total_tokens": getattr(usage, "total_tokens", 0) or 0,
    }


def _record_api_event(
    direction: str,
    model: str,
    messages: list | None = None,
    params: dict | None = None,
    usage: dict | None = None,
    error: str | None = None,
    duration_ms: float | None = None,
) -> None:
    """Write one llm/api_request or llm/api_response event."""
    from .service import get_service
    from .context import get_current_run

    service = get_service()
    run = get_current_run()
    if service is None or run is None:
        return

    from . import events as ev

    data: dict[str, Any] = {"model": model}
    if messages is not None:
        data["messages"] = messages
        data["message_count"] = len(messages)
    if params:
        data["params"] = params
    if usage:
        data["usage"] = usage
    if error:
        data["error"] = error[:500]
    if duration_ms is not None:
        data["duration_ms"] = round(duration_ms, 1)

    try:
        service.store.append(
            run.session_id,
            f"llm/api_{direction}",
            run.trace_id,
            data,
        )
    except Exception:  # noqa: BLE001
        logger.debug("agent-trace: api payload event write failed",
                      exc_info=True)


def _make_wrapper(wrapped, instance, args):
    """Build the common interception logic for sync/async create()."""
    import time as _time

    from openai._types import NotGiven

    # Merge positional + keyword into a single kwargs-like view
    call_kwargs: dict = {}
    try:
        sig_params = ("messages", "model", "temperature", "top_p",
                      "max_tokens", "stream", "tools", "tool_choice",
                      "response_format")
        for i, p in enumerate(sig_params):
            if i < len(args) and args[i] is not None:
                call_kwargs[p] = args[i]
        for k, v in kwargs_iter(instance).items():
            if v is not None and not isinstance(v, NotGiven):
                call_kwargs[k] = v
    except Exception:  # noqa: BLE001
        pass

    model = str(call_kwargs.get("model", "unknown"))
    params = _safe_extract_params(call_kwargs)
    formatted_msgs = _safe_extract_messages(call_kwargs)
    is_stream = bool(call_kwargs.get("stream", False))

    # Record the request (the actual formatted messages)
    _record_api_event("request", model, messages=formatted_msgs,
                      params=params)

    start = _time.perf_counter()

    def _on_result(result: Any) -> None:
        duration_ms = (_time.perf_counter() - start) * 1000
        if is_stream:
            # For streams, usage lives on the final chunk; we record
            # without messages (they were already in the request event)
            _record_api_event("response", model,
                              usage=_extract_usage(result),
                              duration_ms=duration_ms)
        else:
            _record_api_event("response", model,
                              usage=_extract_usage(result),
                              duration_ms=duration_ms)

    def _on_error(exc: BaseException) -> None:
        duration_ms = (_time.perf_counter() - start) * 1000
        _record_api_event("response", model, error=str(exc),
                          duration_ms=duration_ms)

    return call_kwargs, _on_result, _on_error


def kwargs_iter(instance) -> dict:
    """Extract the create() kwargs from the bound call context.

    The wrapt wrapper receives kwargs directly; this is a fallback
    for positional-arg calls.
    """
    return {}


# ── Async wrapper ────────────────────────────────────────────────────────


async def _async_create_wrapper(wrapped, instance, args, kwargs):
    """wrapt wrapper for AsyncCompletions.create."""
    if not _is_active():
        return await wrapped(*args, **kwargs)

    _, on_result, on_error = _make_wrapper(wrapped, instance, args)

    try:
        result = await wrapped(*args, **kwargs)
        # For streaming results, usage is on the last chunk; try to
        # extract from the stream's final state
        if hasattr(result, "__aiter__"):
            # It's an async generator — we need to tee it
            return _TeeAsyncStream(result, on_result, on_error)
        on_result(result)
        return result
    except Exception as exc:
        on_error(exc)
        raise


class _TeeAsyncStream:
    """Wrap an async stream to capture the final chunk's usage."""

    def __init__(self, stream, on_result, on_error):
        self._stream = stream
        self._on_result = on_result
        self._on_error = on_error
        self._last_chunk = None

    def __aiter__(self):
        return self

    async def __anext__(self):
        try:
            chunk = await self._stream.__anext__()
            self._last_chunk = chunk
            return chunk
        except StopAsyncIteration:
            if self._last_chunk is not None:
                self._on_result(self._last_chunk)
            else:
                self._on_result(None)
            raise
        except Exception as exc:
            self._on_error(exc)
            raise


# ── Sync wrapper ─────────────────────────────────────────────────────────


def _sync_create_wrapper(wrapped, instance, args, kwargs):
    """wrapt wrapper for Completions.create (sync)."""
    if not _is_active():
        return wrapped(*args, **kwargs)

    _, on_result, on_error = _make_wrapper(wrapped, instance, args)

    try:
        result = wrapped(*args, **kwargs)
        on_result(result)
        return result
    except Exception as exc:
        on_error(exc)
        raise


# ── Patch lifecycle ──────────────────────────────────────────────────────

_active = False


def _is_active() -> bool:
    return _active


def apply_api_payload_patch() -> None:
    """Attach the wrapt wrappers to the OpenAI SDK."""
    global _active
    if _active:
        return

    from wrapt import wrap_function_wrapper

    for module_name, attr_path in _TARGETS:
        try:
            existing = getattr(
                __import__(module_name, fromlist=["_x"]),
                attr_path.split(".")[-1],
            )
            if hasattr(existing, _WRAPPER_ATTR):
                # Another patcher already wrapped it (e.g. qwenpaw-pet)
                logger.debug(
                    "agent-trace: %s.%s already patched, chaining",
                    module_name, attr_path,
                )

            def _mark(wrapped_fn):
                setattr(wrapped_fn, _WRAPPER_ATTR, True)
                return wrapped_fn

            if "Async" in attr_path:
                wrapper = _async_create_wrapper
            else:
                wrapper = _sync_create_wrapper

            wrap_function_wrapper(module_name, attr_path, wrapper)
            logger.info(
                "agent-trace: API payload patch applied to %s.%s",
                module_name, attr_path,
            )
        except Exception:  # noqa: BLE001
            logger.warning(
                "agent-trace: failed to patch %s.%s",
                module_name, attr_path,
                exc_info=True,
            )

    _active = True


def restore_api_payload_patch() -> None:
    """Remove the wrapt wrappers (best-effort).

    wrapt doesn't support un-wrapping directly; we rely on the _active
    flag to make our wrappers pass-through. A full restore requires
    process restart.
    """
    global _active
    _active = False
    logger.info("agent-trace: API payload patch deactivated "
                "(pass-through until restart)")
