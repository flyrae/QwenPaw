# -*- coding: utf-8 -*-
"""Unit tests for configurable hub spec parsing and mapping."""

from __future__ import annotations

import pytest

from qwenpaw.market.auth import HubAuthSpec
from qwenpaw.market.configurable_spec import HubSpec, ResponseMap


class TestHubSpecValidation:
    def test_valid_spec(self):
        spec = HubSpec(
            key="myhub", label="My Hub", search_url="https://h.test/api/search"
        )
        assert spec.key == "myhub"
        assert spec.label == "My Hub"
        assert spec.origin == "hub:myhub"

    def test_invalid_key(self):
        with pytest.raises(ValueError):
            HubSpec(key="My Hub", search_url="https://h.test/api/search")

    def test_invalid_url(self):
        with pytest.raises(ValueError):
            HubSpec(key="myhub", search_url="not-a-url")

    def test_page_size_capped(self):
        spec = HubSpec(
            key="myhub",
            search_url="https://h.test/api/search",
            page_size=9999,
            max_page_size=50,
        )
        assert spec.page_size == 50


class TestHubSpecUrlMatching:
    def test_prefix_match(self):
        spec = HubSpec(
            key="myhub",
            search_url="https://h.test/api/search",
            url_prefixes=["https://h.test/skills/"],
        )
        assert spec.matches_url("https://h.test/skills/pdf-tool") is True
        assert spec.matches_url("https://other.test/skills/pdf-tool") is False

    def test_netloc_match(self):
        spec = HubSpec(
            key="myhub",
            search_url="https://h.test/api/search",
            url_prefixes=["https://h.test"],
        )
        assert spec.matches_url("https://h.test/anything") is True

    def test_extract_slug(self):
        spec = HubSpec(key="myhub", search_url="https://h.test/api/search")
        assert (
            spec.extract_slug("https://h.test/skills/pdf-tool") == "pdf-tool"
        )
        assert spec.extract_slug("https://h.test/") == ""


class TestHubSpecSearchParams:
    def test_page_based(self):
        spec = HubSpec(key="myhub", search_url="https://h.test/api/search")
        params = spec.build_search_params("pdf", 10, 2)
        assert params["q"] == "pdf"
        assert params["page"] == 2
        assert params["page_size"] == 10

    def test_offset_based(self):
        spec = HubSpec(
            key="myhub",
            search_url="https://h.test/api/search",
            pagination="offset",
            page_size=20,
        )
        params = spec.build_search_params("pdf", 20, 3)
        assert params["offset"] == 40
        assert params["limit"] == 20

    def test_empty_query_omits_q(self):
        spec = HubSpec(key="myhub", search_url="https://h.test/api/search")
        params = spec.build_search_params("", 10, 1)
        assert "q" not in params

    def test_auth_query_params_merged(self):
        spec = HubSpec(
            key="myhub",
            search_url="https://h.test/api/search",
            auth=HubAuthSpec(
                type="api_key", key="token", value="abc", location="query"
            ),
        )
        params = spec.build_search_params("x", 10, 1)
        assert params["token"] == "abc"


class TestHubSpecParseSearch:
    def test_default_mapping(self):
        spec = HubSpec(key="myhub", search_url="https://h.test/api/search")
        body = {
            "items": [
                {"slug": "s1", "name": "Skill 1", "description": "d1"},
                {"slug": "s2", "name": "Skill 2"},
            ],
            "total": 100,
        }
        items, has_more, total = spec.parse_search(body, 2, 1)
        assert len(items) == 2
        assert items[0]["slug"] == "s1"
        assert has_more is True
        assert total == 100

    def test_data_wrapper(self):
        spec = HubSpec(key="myhub", search_url="https://h.test/api/search")
        body = {"data": [{"slug": "x"}]}
        items, _, _ = spec.parse_search(body, 10, 1)
        assert len(items) == 1

    def test_custom_mapping(self):
        spec = HubSpec(
            key="myhub",
            search_url="https://h.test/api/search",
            response_map=ResponseMap(
                items_path="results",
                slug="id",
                name="display_name",
            ),
        )
        body = {
            "results": [{"id": "abc", "display_name": "A"}],
            "total_count": 5,
        }
        items, _, total = spec.parse_search(body, 10, 1)
        assert items[0]["slug"] == "abc"
        assert items[0]["name"] == "A"
        assert total == 5


class TestHubSpecToBundle:
    def test_direct_files(self):
        spec = HubSpec(key="myhub", search_url="https://h.test/api/search")
        detail = {
            "name": "pdf-tool",
            "files": {"SKILL.md": "# PDF"},
        }
        bundle = spec.to_bundle(detail)
        assert bundle["name"] == "pdf-tool"
        assert bundle["files"]["SKILL.md"] == "# PDF"

    def test_inline_content(self):
        spec = HubSpec(
            key="myhub",
            search_url="https://h.test/api/search",
            response_map=ResponseMap(content_path="skill_md"),
        )
        bundle = spec.to_bundle({"name": "x", "skill_md": "# X"})
        assert bundle["files"]["SKILL.md"] == "# X"

    def test_missing_files_returns_empty(self):
        spec = HubSpec(key="myhub", search_url="https://h.test/api/search")
        bundle = spec.to_bundle({"name": "x"})
        assert bundle["name"] == "x"
        assert bundle["files"] == {}

    def test_skill_nested(self):
        spec = HubSpec(
            key="myhub",
            search_url="https://h.test/api/search",
            response_map=ResponseMap(skill_path="skill"),
        )
        bundle = spec.to_bundle(
            {"skill": {"name": "nested", "files": {"SKILL.md": "# N"}}}
        )
        assert bundle["name"] == "nested"
