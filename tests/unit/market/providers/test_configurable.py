# -*- coding: utf-8 -*-
"""Unit tests for the configurable market provider."""

from __future__ import annotations

from types import SimpleNamespace
from unittest.mock import AsyncMock, patch

import pytest

from qwenpaw.market.auth import HubAuthSpec
from qwenpaw.market.configurable_spec import HubSpec
from qwenpaw.market.providers.configurable import (
    ConfigurableHubProvider,
    _to_market_result,
)


@pytest.fixture
def sample_spec() -> HubSpec:
    return HubSpec(
        key="demo",
        label="Demo Hub",
        search_url="https://demo.test/api/search",
    )


@pytest.fixture
def provider(sample_spec: HubSpec) -> ConfigurableHubProvider:
    return ConfigurableHubProvider(sample_spec)


class TestAvailability:
    def test_available_without_auth(self, provider):
        assert provider.available() == (True, None)

    def test_unavailable_when_missing_credentials(self, sample_spec):
        sample_spec.auth = HubAuthSpec(type="bearer")
        provider = ConfigurableHubProvider(sample_spec)
        available, reason = provider.available()
        assert available is False
        assert "missing credentials" in reason


class TestSearch:
    async def test_search_maps_results(self, provider):
        mock_body = {
            "items": [
                {
                    "slug": "pdf-tool",
                    "name": "PDF Tool",
                    "description": "read pdfs",
                    "version": "1.0",
                    "author": "alice",
                },
            ],
            "total": 1,
        }
        with patch(
            "qwenpaw.market.providers.configurable.http_json_get",
            new=AsyncMock(return_value=mock_body),
        ) as fetch:
            results, has_more, total = await provider.search("pdf", 10, 1)

        fetch.assert_awaited_once()
        call_kwargs = fetch.call_args.kwargs
        assert call_kwargs["headers"] is None
        assert len(results) == 1
        assert results[0].slug == "pdf-tool"
        assert results[0].source == "demo"
        assert has_more is False
        assert total == 1

    async def test_search_passes_auth_headers(self, sample_spec):
        sample_spec.auth = HubAuthSpec(type="bearer", value="tok")
        provider = ConfigurableHubProvider(sample_spec)
        with patch(
            "qwenpaw.market.providers.configurable.http_json_get",
            new=AsyncMock(return_value={"items": [], "total": 0}),
        ) as fetch:
            await provider.search("x", 10, 1)

        assert fetch.call_args.kwargs["headers"] == {
            "Authorization": "Bearer tok",
        }

    async def test_search_raises_on_http_error(self, provider):
        import httpx

        response = httpx.Response(
            500, request=httpx.Request("GET", "https://demo.test")
        )
        error = httpx.HTTPStatusError(
            "err", request=response.request, response=response
        )
        with patch(
            "qwenpaw.market.providers.configurable.http_json_get",
            new=AsyncMock(side_effect=error),
        ):
            with pytest.raises(RuntimeError) as exc_info:
                await provider.search("x", 10, 1)
        assert "500" in str(exc_info.value)


class TestToMarketResult:
    def test_valid_item(self):
        item = {
            "slug": "s1",
            "name": "Skill 1",
            "description": "desc",
            "version": "1.0",
            "author": "bob",
            "icon_url": "https://icon",
            "source_url": "https://src",
        }
        result = _to_market_result("demo", item)
        assert result is not None
        assert result.source == "demo"
        assert result.slug == "s1"

    def test_missing_slug_skipped(self):
        result = _to_market_result("demo", {"name": "No slug"})
        assert result is None
