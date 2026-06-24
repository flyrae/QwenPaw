# -*- coding: utf-8 -*-
"""Registry for user-configured third-party skill hubs."""

from __future__ import annotations

import json
import logging
from pathlib import Path
from typing import Any

from ..constant import WORKING_DIR

logger = logging.getLogger(__name__)

HUBS_CONFIG_FILE = "skill_hubs.json"


def _import_market_auth_spec() -> type:
    from ..market.auth import HubAuthSpec

    return HubAuthSpec


def _import_market_spec_types() -> tuple[type, type]:
    from ..market.configurable_spec import HubSpec, ResponseMap

    return HubSpec, ResponseMap


def _hubs_config_path() -> Path:
    return Path(WORKING_DIR) / HUBS_CONFIG_FILE


def _load_json_file(path: Path) -> dict[str, Any]:
    if not path.exists():
        return {}
    try:
        with path.open("r", encoding="utf-8") as f:
            return json.load(f)
    except json.JSONDecodeError as exc:
        logger.warning("Invalid JSON in %s: %s", path, exc)
        return {}
    except OSError as exc:
        logger.warning("Failed to read %s: %s", path, exc)
        return {}


def _build_auth(raw: Any) -> Any:
    HubAuthSpec = _import_market_auth_spec()
    if not isinstance(raw, dict):
        return HubAuthSpec()
    return HubAuthSpec(
        type=str(raw.get("type", "none")).lower() or "none",
        env=str(raw.get("env", "")),
        value=str(raw.get("value", "")),
        key=str(raw.get("key", "")),
        location=str(raw.get("location", "")),
    )


def _build_response_map(raw: Any) -> Any:
    _, ResponseMap = _import_market_spec_types()
    if not isinstance(raw, dict):
        return ResponseMap()
    return ResponseMap(
        items_path=str(raw.get("items_path", "items")),
        slug=str(raw.get("slug", "slug")),
        name=str(raw.get("name", "name")),
        description=str(raw.get("description", "description")),
        author=str(raw.get("author", "author")),
        version=str(raw.get("version", "version")),
        icon_url=str(raw.get("icon_url", "icon_url")),
        files_path=str(raw.get("files_path", "files")),
        content_path=str(raw.get("content_path", "content")),
        skill_path=str(raw.get("skill_path", "skill")),
        versions_path=str(raw.get("versions_path", "versions")),
        version_files_path=str(raw.get("version_files_path", "files")),
    )


def _build_spec(raw: Any) -> Any | None:
    HubSpec, _ = _import_market_spec_types()
    if not isinstance(raw, dict):
        return None
    key = str(raw.get("key", "")).strip()
    label = str(raw.get("label", "")).strip() or key
    search_url = str(raw.get("search_url", "")).strip()
    if not key or not search_url:
        logger.warning("Skipping hub entry without key/search_url: %s", raw)
        return None
    try:
        return HubSpec(
            key=key,
            label=label,
            search_url=search_url,
            detail_url=str(raw.get("detail_url", "")).strip(),
            install_url=str(raw.get("install_url", "")).strip(),
            file_url=str(raw.get("file_url", "")).strip(),
            url_prefixes=[
                str(p).strip()
                for p in raw.get("url_prefixes", [])
                if isinstance(p, str) and p.strip()
            ],
            auth=_build_auth(raw.get("auth")),
            pagination=str(raw.get("pagination", "page")).lower() or "page",
            page_size=int(raw.get("page_size", 20)),
            max_page_size=int(raw.get("max_page_size", 100)),
            response_map=_build_response_map(raw.get("response_map")),
            headers={
                str(k): str(v)
                for k, v in (raw.get("headers") or {}).items()
                if isinstance(k, str) and isinstance(v, str)
            },
            supports_browse=bool(raw.get("supports_browse", True)),
        )
    except ValueError as exc:
        logger.warning("Invalid hub spec for key '%s': %s", key, exc)
        return None


def list_configured_hubs() -> list[Any]:
    """Return all valid configured third-party skill hubs."""
    data = _load_json_file(_hubs_config_path())
    raw_hubs = data.get("skill_hubs")
    if not isinstance(raw_hubs, list):
        return []
    specs: list[Any] = []
    for raw in raw_hubs:
        spec = _build_spec(raw)
        if spec is not None:
            specs.append(spec)
    return specs


def get_configured_hub(key: str) -> Any | None:
    """Return a configured hub by key."""
    for spec in list_configured_hubs():
        if spec.key == key:
            return spec
    return None


def find_hub_for_url(url: str) -> Any | None:
    """Find a configured hub that matches the given URL."""
    for spec in list_configured_hubs():
        if spec.matches_url(url):
            return spec
    return None


def list_configured_hub_keys() -> list[str]:
    """Return keys of configured hubs."""
    return [spec.key for spec in list_configured_hubs()]
