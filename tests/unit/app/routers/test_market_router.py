# -*- coding: utf-8 -*-
"""Unit tests for the market router."""

from __future__ import annotations

from unittest.mock import MagicMock, patch

import pytest
from fastapi import FastAPI
from fastapi.testclient import TestClient

from qwenpaw.app.routers.market import router as market_router


@pytest.fixture
def app() -> FastAPI:
    application = FastAPI()
    application.include_router(market_router, prefix="/api")
    return application


@pytest.fixture
def client(app) -> TestClient:
    return TestClient(app)


class TestGetConfiguredHubs:
    def test_returns_configured_hubs(self, client):
        fake_spec = MagicMock()
        fake_spec.key = "company"
        fake_spec.label = "Company Hub"
        fake_spec.search_url = "https://hub.company.com/api/search"
        fake_spec.url_prefixes = ["https://hub.company.com/skills/"]
        fake_spec.supports_browse = True
        with patch(
            "qwenpaw.app.routers.market.list_configured_hubs",
            return_value=[fake_spec],
        ):
            response = client.get("/api/market/hubs")

        assert response.status_code == 200
        body = response.json()
        assert len(body) == 1
        assert body[0]["key"] == "company"
        assert body[0]["search_url"] == "https://hub.company.com/api/search"

    def test_empty_list(self, client):
        with patch(
            "qwenpaw.app.routers.market.list_configured_hubs",
            return_value=[],
        ):
            response = client.get("/api/market/hubs")
        assert response.status_code == 200
        assert response.json() == []
