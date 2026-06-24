# -*- coding: utf-8 -*-
"""Unit tests for skill hub authentication helpers."""

from __future__ import annotations

import base64
import os

import pytest

from qwenpaw.market.auth import (
    ApiKeyAuth,
    BasicAuth,
    BearerAuth,
    HubAuth,
    HubAuthSpec,
    NoAuth,
)


class TestNoAuth:
    def test_headers_and_params_are_empty(self):
        auth = NoAuth()
        assert auth.headers() == {}
        assert auth.query_params() == {}


class TestBearerAuth:
    def test_adds_authorization_header(self):
        auth = BearerAuth(HubAuthSpec(type="bearer", value="tok123"))
        assert auth.headers() == {"Authorization": "Bearer tok123"}
        assert auth.query_params() == {}

    def test_empty_token_produces_no_header(self):
        auth = BearerAuth(HubAuthSpec(type="bearer"))
        assert auth.headers() == {}

    def test_reads_token_from_env(self, monkeypatch):
        monkeypatch.setenv("MY_HUB_TOKEN", "envtok")
        auth = BearerAuth(HubAuthSpec(type="bearer", env="MY_HUB_TOKEN"))
        assert auth.headers() == {"Authorization": "Bearer envtok"}


class TestApiKeyAuth:
    def test_header_location(self):
        auth = ApiKeyAuth(
            HubAuthSpec(type="api_key", key="X-Hub-Key", value="abc"),
        )
        assert auth.headers() == {"X-Hub-Key": "abc"}
        assert auth.query_params() == {}

    def test_query_location(self):
        auth = ApiKeyAuth(
            HubAuthSpec(
                type="api_key",
                key="api_key",
                value="abc",
                location="query",
            ),
        )
        assert auth.query_params() == {"api_key": "abc"}
        assert auth.headers() == {}

    def test_empty_value_is_silent(self):
        auth = ApiKeyAuth(HubAuthSpec(type="api_key", key="X-Hub-Key"))
        assert auth.headers() == {}
        assert auth.query_params() == {}


class TestBasicAuth:
    def test_username_password(self):
        auth = BasicAuth(HubAuthSpec(type="basic", value="alice:secret"))
        creds = base64.b64encode(b"alice:secret").decode()
        assert auth.headers() == {"Authorization": f"Basic {creds}"}

    def test_username_only(self):
        auth = BasicAuth(HubAuthSpec(type="basic", value="alice"))
        creds = base64.b64encode(b"alice:").decode()
        assert auth.headers() == {"Authorization": f"Basic {creds}"}

    def test_empty_secret_is_silent(self):
        auth = BasicAuth(HubAuthSpec(type="basic"))
        assert auth.headers() == {}


class TestHubAuthFactory:
    def test_none_returns_no_auth(self):
        assert isinstance(HubAuth.from_spec(HubAuthSpec()), NoAuth)

    def test_bearer_factory(self):
        spec = HubAuthSpec(type="bearer", value="t")
        assert isinstance(HubAuth.from_spec(spec), BearerAuth)

    def test_api_key_factory(self):
        spec = HubAuthSpec(type="api_key", value="t")
        assert isinstance(HubAuth.from_spec(spec), ApiKeyAuth)

    def test_basic_factory(self):
        spec = HubAuthSpec(type="basic", value="u:p")
        assert isinstance(HubAuth.from_spec(spec), BasicAuth)


class TestHubAuthSpec:
    def test_secret_prefers_env(self, monkeypatch):
        monkeypatch.setenv("K", "env")
        spec = HubAuthSpec(env="K", value="inline")
        assert spec.secret() == "env"

    def test_has_credentials(self):
        assert HubAuthSpec(type="none").has_credentials() is True
        assert HubAuthSpec(type="bearer").has_credentials() is False
        assert HubAuthSpec(type="bearer", value="t").has_credentials() is True
