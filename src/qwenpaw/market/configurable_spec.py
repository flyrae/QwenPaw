# -*- coding: utf-8 -*-
"""Configuration schema and parsing for third-party skill hubs."""

from __future__ import annotations

import re
from dataclasses import dataclass, field
from typing import Any, Literal
from urllib.parse import urlparse

from .auth import AuthType, HubAuth, HubAuthSpec

PaginationType = Literal["offset", "page", "cursor"]


@dataclass
class ResponseMap:
    """Maps upstream JSON fields to the internal schema."""

    # search response
    items_path: str = "items"
    slug: str = "slug"
    name: str = "name"
    description: str = "description"
    author: str = "author"
    version: str = "version"
    icon_url: str = "icon_url"
    # detail/bundle response
    files_path: str = "files"
    content_path: str = "content"
    skill_path: str = "skill"
    versions_path: str = "versions"
    version_files_path: str = "files"


@dataclass
class HubSpec:
    """Specification for one third-party skill hub."""

    key: str
    search_url: str
    label: str = ""
    # API endpoints
    detail_url: str = ""
    install_url: str = ""
    file_url: str = ""
    # URL prefixes used to route install requests to this hub.
    url_prefixes: list[str] = field(default_factory=list)
    # Authentication
    auth: HubAuthSpec = field(default_factory=HubAuthSpec)
    # Pagination strategy
    pagination: PaginationType = "page"
    page_size: int = 20
    max_page_size: int = 100
    # Field mapping
    response_map: ResponseMap = field(default_factory=ResponseMap)
    # Extra static headers sent on every request.
    headers: dict[str, str] = field(default_factory=dict)
    supports_browse: bool = True

    def __post_init__(self):
        if not self.key or not re.match(r"^[a-z0-9_-]+$", self.key):
            raise ValueError(
                "hub key must be lowercase alphanumeric "
                f"with '-'/'_': {self.key}",
            )
        if not self.label:
            self.label = self.key
        if not self.search_url or not self.search_url.startswith(
            ("http://", "https://"),
        ):
            raise ValueError(f"invalid search_url: {self.search_url}")
        self.page_size = max(1, min(int(self.page_size), self.max_page_size))

    @property
    def origin(self) -> str:
        """Origin label persisted in the skill manifest."""
        return f"hub:{self.key}"

    def auth_headers(self) -> dict[str, str]:
        """Return auth headers merged with static headers."""
        out = dict(self.headers)
        out.update(HubAuth.from_spec(self.auth).headers())
        return out

    def auth_query_params(self) -> dict[str, str]:
        """Return auth query parameters."""
        return HubAuth.from_spec(self.auth).query_params()

    def has_credentials(self) -> bool:
        """Return whether required credentials are available."""
        return self.auth.has_credentials()

    def matches_url(self, url: str) -> bool:
        """Return True when ``url`` belongs to this hub."""
        if not url:
            return False
        parsed = urlparse(url)
        netloc = (parsed.netloc or "").lower()
        for prefix in self.url_prefixes:
            if url.startswith(prefix):
                return True
            parsed_prefix = urlparse(prefix)
            if parsed_prefix.netloc and parsed_prefix.netloc.lower() == netloc:
                return True
        return False

    def extract_slug(self, url: str) -> str:
        """Extract a skill slug from a hub URL.

        Heuristic: take the last non-empty path segment.
        Providers that need custom parsing should override.
        """
        parsed = urlparse(url)
        parts = [p for p in parsed.path.split("/") if p]
        return parts[-1] if parts else ""

    def build_search_params(
        self,
        query: str,
        limit: int,
        page: int,
        lang: str = "en",
        category: str | None = None,
    ) -> dict[str, Any]:
        """Build search query parameters according to pagination strategy."""
        params: dict[str, Any] = {}
        if self.pagination == "offset":
            page_size = max(1, min(int(limit), self.max_page_size))
            params["limit"] = page_size
            params["offset"] = (max(1, int(page)) - 1) * page_size
        elif self.pagination == "cursor":
            # Cursor pagination: callers pass next token via page hack.
            params["limit"] = max(1, min(int(limit), self.max_page_size))
            if page > 1:
                params["cursor"] = str(page)
        else:
            # Default page-based.
            params["page"] = max(1, int(page))
            params["page_size"] = max(1, min(int(limit), self.max_page_size))

        needle = (query or "").strip()
        if needle:
            params["q"] = needle
        if category:
            params["category"] = category
        if lang:
            params["lang"] = lang
        params.update(self.auth_query_params())
        return params

    def parse_search(
        self,
        body: Any,
        limit: int,
        page: int,
    ) -> tuple[list[dict[str, Any]], bool, int | None]:
        """Parse a search response into (items, has_more, total)."""
        if not isinstance(body, dict):
            return [], False, None

        data = _get_path(body, self.response_map.items_path)
        if not isinstance(data, list):
            # Some hubs wrap list under "data".
            data = _get_path(body, "data")
        items: list[dict[str, Any]] = [
            x
            for x in (data if isinstance(data, list) else [])
            if isinstance(x, dict)
        ]

        total = _opt_int(_get_path(body, "total"))
        if total is None:
            total = _opt_int(_get_path(body, "total_count"))

        # Build normalized item dicts for downstream MarketResult conversion.
        normalized = []
        for item in items:
            normalized.append(
                {
                    "slug": _str(_get_path(item, self.response_map.slug)),
                    "name": _str(_get_path(item, self.response_map.name)),
                    "description": _opt_str(
                        _get_path(item, self.response_map.description),
                    ),
                    "author": _opt_str(
                        _get_path(item, self.response_map.author),
                    ),
                    "version": _opt_str(
                        _get_path(item, self.response_map.version),
                    ),
                    "icon_url": _opt_str(
                        _get_path(item, self.response_map.icon_url),
                    ),
                },
            )

        has_more = False
        if isinstance(total, int) and total > 0:
            offset = (page - 1) * limit
            has_more = offset + len(items) < total
        else:
            has_more = len(items) == limit

        return normalized, has_more, total

    def to_bundle(self, detail: Any, version: str = "") -> dict[str, Any]:
        """Convert a hub detail response into the canonical bundle shape.

        Canonical shape: {"name": str, "files": {"SKILL.md": str, ...}}
        """
        if not isinstance(detail, dict):
            raise ValueError("hub detail response must be a JSON object")

        # Some hubs nest the skill under a "skill" key.
        payload = _get_path(detail, self.response_map.skill_path) or detail
        if not isinstance(payload, dict):
            payload = detail

        name = _str(_get_path(payload, "name"))
        if not name:
            post = _get_path(payload, "displayName")
            name = _str(post)

        files: dict[str, str] = {}

        # Direct files mapping.
        raw_files = _get_path(payload, self.response_map.files_path)
        if isinstance(raw_files, dict):
            files = {
                str(k): str(v)
                for k, v in raw_files.items()
                if isinstance(v, str)
            }

        # Or inline content.
        content = _get_path(payload, self.response_map.content_path)
        if isinstance(content, str) and content:
            files["SKILL.md"] = content

        # Or versioned files list (like ClawHub).
        if not files and self.response_map.versions_path:
            versions = _get_path(detail, self.response_map.versions_path)
            if isinstance(versions, list):
                target = version or ""
                for ver in versions:
                    if not isinstance(ver, dict):
                        continue
                    ver_str = _str(ver.get("version"))
                    if not target or ver_str == target:
                        ver_files = _get_path(
                            ver,
                            self.response_map.version_files_path,
                        )
                        if isinstance(ver_files, list):
                            for vf in ver_files:
                                if isinstance(vf, dict) and isinstance(
                                    vf.get("path"), str
                                ):
                                    files[vf["path"]] = ""
                        break

        return {"name": name, "files": files}


def _get_path(data: Any, path: str) -> Any:
    """Resolve a dot-separated path in a nested dict."""
    if not path:
        return data
    current: Any = data
    for part in path.split("."):
        if current is None:
            return None
        if isinstance(current, dict):
            current = current.get(part)
        else:
            return None
    return current


def _str(value: Any) -> str:
    if isinstance(value, str):
        return value.strip()
    return ""


def _opt_str(value: Any) -> str | None:
    s = _str(value)
    return s or None


def _opt_int(value: Any) -> int | None:
    if isinstance(value, bool):
        return None
    if isinstance(value, int):
        return value
    if isinstance(value, str) and value.strip().lstrip("-").isdigit():
        return int(value.strip())
    return None
