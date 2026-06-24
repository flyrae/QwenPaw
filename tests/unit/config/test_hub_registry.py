# -*- coding: utf-8 -*-
"""Unit tests for configured skill hub registry."""

from __future__ import annotations

import json
from pathlib import Path
from unittest.mock import patch

import pytest

from qwenpaw.config.hub_registry import (
    _build_spec,
    find_hub_for_url,
    get_configured_hub,
    list_configured_hubs,
)


@pytest.fixture
def hubs_config(tmp_path: Path):
    config = {
        "skill_hubs": [
            {
                "key": "company",
                "label": "Company Hub",
                "search_url": "https://hub.company.com/api/search",
                "detail_url": "https://hub.company.com/api/skills/{slug}",
                "file_url": "https://hub.company.com/api/skills/{slug}/file",
                "url_prefixes": ["https://hub.company.com/skills/"],
                "auth": {"type": "bearer", "env": "COMPANY_HUB_TOKEN"},
                "pagination": "offset",
                "page_size": 20,
            },
            {
                "key": "bad",
                "label": "Bad Hub",
                # missing search_url
            },
        ],
    }
    path = tmp_path / "skill_hubs.json"
    path.write_text(json.dumps(config), encoding="utf-8")
    return path


class TestListConfiguredHubs:
    def test_reads_valid_hubs(self, hubs_config, monkeypatch, tmp_path):
        monkeypatch.setattr(
            "qwenpaw.config.hub_registry._hubs_config_path",
            lambda: hubs_config,
        )
        hubs = list_configured_hubs()
        assert len(hubs) == 1
        assert hubs[0].key == "company"
        assert hubs[0].label == "Company Hub"

    def test_missing_file_returns_empty(self, tmp_path, monkeypatch):
        monkeypatch.setattr(
            "qwenpaw.config.hub_registry._hubs_config_path",
            lambda: tmp_path / "no_such_file.json",
        )
        assert list_configured_hubs() == []

    def test_invalid_json_returns_empty(self, tmp_path, monkeypatch):
        bad = tmp_path / "skill_hubs.json"
        bad.write_text("not json", encoding="utf-8")
        monkeypatch.setattr(
            "qwenpaw.config.hub_registry._hubs_config_path",
            lambda: bad,
        )
        assert list_configured_hubs() == []


class TestFindHubForUrl:
    def test_finds_by_prefix(self, hubs_config, monkeypatch):
        monkeypatch.setattr(
            "qwenpaw.config.hub_registry._hubs_config_path",
            lambda: hubs_config,
        )
        spec = find_hub_for_url("https://hub.company.com/skills/pdf-tool")
        assert spec is not None
        assert spec.key == "company"

    def test_returns_none_for_unknown_url(self, hubs_config, monkeypatch):
        monkeypatch.setattr(
            "qwenpaw.config.hub_registry._hubs_config_path",
            lambda: hubs_config,
        )
        assert find_hub_for_url("https://other.test/skills/x") is None


class TestGetConfiguredHub:
    def test_by_key(self, hubs_config, monkeypatch):
        monkeypatch.setattr(
            "qwenpaw.config.hub_registry._hubs_config_path",
            lambda: hubs_config,
        )
        spec = get_configured_hub("company")
        assert spec is not None
        assert spec.key == "company"
        assert get_configured_hub("missing") is None


class TestBuildSpec:
    def test_missing_key_skipped(self):
        assert _build_spec({"search_url": "https://x"}) is None

    def test_missing_search_url_skipped(self):
        assert _build_spec({"key": "x"}) is None

    def test_invalid_spec_logs_and_returns_none(self):
        with patch("qwenpaw.config.hub_registry.logger"):
            assert (
                _build_spec({"key": "bad key", "search_url": "https://x"})
                is None
            )
