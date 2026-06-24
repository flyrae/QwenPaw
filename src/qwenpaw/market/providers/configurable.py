# -*- coding: utf-8 -*-
"""Configurable third-party skill hub market provider."""

from __future__ import annotations

import logging
from typing import Any

import httpx

from ...agents.skill_system.hub import http_json_get
from ...config.hub_registry import list_configured_hubs
from ..configurable_spec import HubSpec
from ..schema import MarketResult
from .base import MARKET_SEARCH_TIMEOUT_S

logger = logging.getLogger(__name__)


class ConfigurableHubProvider:
    """One provider instance per configured third-party hub."""

    def __init__(self, spec: HubSpec):
        self.spec = spec
        self.key = spec.key
        self.label = spec.label
        self.supports_browse = spec.supports_browse

    def available(self) -> tuple[bool, str | None]:
        if not self.spec.has_credentials():
            return False, f"missing credentials for hub '{self.key}'"
        return True, None

    async def search(
        self,
        query: str,
        limit: int,
        page: int,
        lang: str = "en",
        category: str | None = None,
    ) -> tuple[list[MarketResult], bool, int | None]:
        params = self.spec.build_search_params(
            query=query,
            limit=limit,
            page=page,
            lang=lang,
            category=category,
        )
        headers = self.spec.auth_headers()
        try:
            body = await http_json_get(
                self.spec.search_url,
                params=params,
                timeout=MARKET_SEARCH_TIMEOUT_S,
                headers=headers or None,
            )
        except httpx.HTTPStatusError as e:
            raise RuntimeError(
                f"{self.key} search returned HTTP {e.response.status_code}",
            ) from e

        items, has_more, total = self.spec.parse_search(body, limit, page)
        results = [_to_market_result(self.key, item) for item in items]
        return [r for r in results if r is not None], has_more, total


def _to_market_result(
    source_key: str,
    item: dict[str, Any],
) -> MarketResult | None:
    slug = str(item.get("slug") or "").strip()
    if not slug:
        return None
    return MarketResult(
        source=source_key,
        slug=slug,
        name=str(item.get("name") or slug),
        description=item.get("description"),
        source_url=item.get("source_url") or "",
        version=item.get("version"),
        author=item.get("author"),
        icon_url=item.get("icon_url"),
        stats=None,
    )


def load_configurable_providers() -> list[ConfigurableHubProvider]:
    """Return provider instances for all configured third-party hubs."""
    return [ConfigurableHubProvider(spec) for spec in list_configured_hubs()]
