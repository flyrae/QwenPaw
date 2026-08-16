# -*- coding: utf-8 -*-
"""Plugin singleton wiring the trace store and its configuration."""
from __future__ import annotations

import asyncio
import logging
from pathlib import Path
from typing import Any, List, Optional, Pattern

from qwenpaw.constant import WORKING_DIR

from .config import TraceConfig
from .events import compile_patterns, sanitize_payload
from .store import TraceStore

logger = logging.getLogger("qwenpaw.plugins.agent_trace")

TRACES_DIRNAME = "traces"
CLEANUP_INTERVAL_SECONDS = 24 * 3600

_service: Optional["TraceService"] = None


def get_service() -> Optional["TraceService"]:
    """Return the process-wide trace service, if the plugin is loaded."""
    return _service


def set_service(service: Optional["TraceService"]) -> None:
    """Install (or clear) the process-wide trace service."""
    global _service
    _service = service


class TraceService:
    """Owns the configuration, the JSONL store, and payload sanity."""

    def __init__(self, root: Optional[Path] = None) -> None:
        if root is None:
            root = WORKING_DIR / TRACES_DIRNAME
        self.root = Path(root)
        self.config = TraceConfig.load(self.root)
        self.store = TraceStore(self.root, self.config)
        self._patterns: Optional[List[Pattern[str]]] = None
        self._cleanup_task: Optional["asyncio.Task"] = None
        # Last recorded request-header sha per session, so unchanged
        # prompts are not re-recorded on every model call.
        self._header_sha_by_session: dict = {}

    @property
    def enabled(self) -> bool:
        """Whether recording is currently switched on."""
        return self.config.enabled

    def sanitize(self, data: Any, limit: Optional[int] = None) -> Any:
        """Apply redaction + truncation to an event payload."""
        if self._patterns is None:
            self._patterns = compile_patterns(
                self.config.redact_patterns,
            )
        return sanitize_payload(
            data,
            limit=self.config.max_payload_chars
            if limit is None
            else limit,
            patterns=self._patterns,
        )

    def last_header_sha(self, session_id: str) -> Optional[str]:
        """Content sha of the last recorded header for a session."""
        return self._header_sha_by_session.get(session_id)

    def set_last_header_sha(self, session_id: str, sha: str) -> None:
        """Record the sha of the most recent header event."""
        self._header_sha_by_session[session_id] = sha

    def invalidate_patterns(self) -> None:
        """Recompile redaction patterns after a config change."""
        self._patterns = None

    async def start(self) -> None:
        """Recover torn runs, launch the flush task, enforce retention."""
        self.store.start()
        recovered = await asyncio.to_thread(
            self.store.recover_interrupted_runs,
        )
        if recovered:
            await self.store.flush()
            logger.info(
                "agent-trace: closed %d run(s) left open by a previous"
                " process",
                recovered,
            )
        await self._cleanup_once()
        self._cleanup_task = asyncio.ensure_future(self._cleanup_loop())

    async def _cleanup_loop(self) -> None:
        """Enforce retention once a day; never raises out."""
        while True:
            await asyncio.sleep(CLEANUP_INTERVAL_SECONDS)
            try:
                await self._cleanup_once()
            except Exception:  # pylint: disable=broad-except
                logger.debug(
                    "agent-trace: scheduled cleanup failed",
                    exc_info=True,
                )

    async def _cleanup_once(self) -> None:
        removed = await asyncio.to_thread(self.store.cleanup)
        for session_id in removed:
            self._header_sha_by_session.pop(session_id, None)
        if removed:
            logger.info(
                "agent-trace: retention cleanup removed %d session "
                "file(s) under %s",
                len(removed),
                self.root,
            )

    async def shutdown(self) -> None:
        """Stop the flush task after draining buffered events."""
        if self._cleanup_task is not None:
            self._cleanup_task.cancel()
            self._cleanup_task = None
        await self.store.shutdown()

    async def delete_session(self, session_id: str) -> bool:
        """Delete a session file and forget its header cache."""
        deleted = await self.store.delete_session(session_id)
        if deleted:
            self._header_sha_by_session.pop(session_id, None)
        return deleted

    def save_config(self) -> None:
        """Persist the current settings next to the trace files."""
        self.config.save(self.root)
        self.invalidate_patterns()
