# -*- coding: utf-8 -*-
"""Unit tests for configured hub bundle fetching in hub.py."""

from __future__ import annotations

import json
from pathlib import Path
from unittest.mock import AsyncMock, patch

import pytest

from qwenpaw.agents.skill_system.hub import (
    _classify_install_origin,
    _fetch_bundle_from_configured_hub,
    _match_configured_hub,
)
from qwenpaw.config.hub_registry import _build_spec


@pytest.fixture
def hub_spec():
    return _build_spec(
        {
            "key": "company",
            "label": "Company Hub",
            "search_url": "https://hub.company.com/api/search",
            "detail_url": "https://hub.company.com/api/skills/{slug}",
            "file_url": "https://hub.company.com/api/skills/{slug}/file",
            "url_prefixes": ["https://hub.company.com/skills/"],
            "auth": {"type": "bearer", "value": "tok"},
        },
    )


@pytest.fixture
def hubs_config(tmp_path: Path, hub_spec):
    config_path = tmp_path / "skill_hubs.json"
    config_path.write_text(
        json.dumps(
            {
                "skill_hubs": [
                    {
                        "key": "company",
                        "label": "Company Hub",
                        "search_url": "https://hub.company.com/api/search",
                        "detail_url": (
                            "https://hub.company.com/api/skills/{slug}"
                        ),
                        "file_url": (
                            "https://hub.company.com/api/skills/{slug}/file"
                        ),
                        "url_prefixes": ["https://hub.company.com/skills/"],
                        "auth": {"type": "bearer", "value": "tok"},
                    },
                ],
            },
        ),
        encoding="utf-8",
    )
    return config_path


class TestMatchConfiguredHub:
    def test_matches_configured_url(self, hubs_config, monkeypatch):
        monkeypatch.setattr(
            "qwenpaw.config.hub_registry._hubs_config_path",
            lambda: hubs_config,
        )
        spec = _match_configured_hub("https://hub.company.com/skills/pdf-tool")
        assert spec is not None
        assert spec.key == "company"

    def test_no_match_returns_none(self, hubs_config, monkeypatch):
        monkeypatch.setattr(
            "qwenpaw.config.hub_registry._hubs_config_path",
            lambda: hubs_config,
        )
        assert _match_configured_hub("https://other.test/skills/x") is None


class TestClassifyInstallOrigin:
    def test_configured_hub_returns_hub_origin(self, hubs_config, monkeypatch):
        monkeypatch.setattr(
            "qwenpaw.config.hub_registry._hubs_config_path",
            lambda: hubs_config,
        )
        origin = _classify_install_origin(
            "https://hub.company.com/skills/pdf-tool",
        )
        assert origin == "hub:company"

    def test_github_origin_unchanged(self):
        origin = _classify_install_origin("https://github.com/owner/repo")
        assert origin == "github"


class TestFetchBundleFromConfiguredHub:
    async def test_fetch_direct_files(self, hubs_config, monkeypatch):
        monkeypatch.setattr(
            "qwenpaw.config.hub_registry._hubs_config_path",
            lambda: hubs_config,
        )
        detail = {
            "name": "pdf-tool",
            "files": {"SKILL.md": "# PDF Skill"},
        }
        with patch(
            "qwenpaw.agents.skill_system.hub._http_json_get",
            new=AsyncMock(return_value=detail),
        ) as fetch:
            bundle, source_url = await _fetch_bundle_from_configured_hub(
                "https://hub.company.com/skills/pdf-tool",
                "",
            )

        assert bundle["name"] == "pdf-tool"
        assert bundle["files"]["SKILL.md"] == "# PDF Skill"
        assert source_url == "https://hub.company.com/skills/pdf-tool"
        fetch.assert_awaited_once()
        call_kwargs = fetch.call_args.kwargs
        assert call_kwargs["headers"] == {"Authorization": "Bearer tok"}

    async def test_fetch_empty_file_placeholders(
        self, hubs_config, monkeypatch
    ):
        monkeypatch.setattr(
            "qwenpaw.config.hub_registry._hubs_config_path",
            lambda: hubs_config,
        )
        detail = {
            "name": "pdf-tool",
            "files": {"SKILL.md": "", "references/foo.md": ""},
        }
        with patch(
            "qwenpaw.agents.skill_system.hub._http_json_get",
            new=AsyncMock(return_value=detail),
        ):
            with patch(
                "qwenpaw.agents.skill_system.hub._http_text_get",
                new=AsyncMock(return_value="file content"),
            ) as text_fetch:
                bundle, _ = await _fetch_bundle_from_configured_hub(
                    "https://hub.company.com/skills/pdf-tool",
                    "",
                )

        assert bundle["files"]["references/foo.md"] == "file content"
        text_fetch.assert_awaited()
