# -*- coding: utf-8 -*-
"""Authentication helpers for configurable skill hubs."""

from __future__ import annotations

import base64
import os
from dataclasses import dataclass
from typing import Any, Literal

AuthType = Literal["none", "bearer", "api_key", "basic"]


@dataclass
class HubAuthSpec:
    """Authentication specification for a third-party skill hub."""

    type: AuthType = "none"
    # env var holding the secret; preferred over hardcoded ``value``.
    env: str = ""
    # inline secret (discouraged, but supported for quick tests).
    value: str = ""
    # api_key only: query parameter name or header name.
    key: str = ""
    # api_key only: "query" or "header".
    location: str = ""

    def secret(self) -> str:
        """Return resolved secret from env or inline value."""
        if self.env:
            return os.environ.get(self.env, "")
        return self.value or ""

    def has_credentials(self) -> bool:
        """Return True when required credentials are present."""
        if self.type == "none":
            return True
        return bool(self.secret())


class HubAuth:
    """Base class for hub authentication."""

    def headers(self) -> dict[str, str]:
        """Return extra HTTP headers for this auth method."""
        return {}

    def query_params(self) -> dict[str, str]:
        """Return extra query parameters for this auth method."""
        return {}

    @staticmethod
    def from_spec(spec: HubAuthSpec) -> HubAuth:
        """Factory that picks the concrete auth implementation."""
        if spec.type == "bearer":
            return BearerAuth(spec)
        if spec.type == "api_key":
            return ApiKeyAuth(spec)
        if spec.type == "basic":
            return BasicAuth(spec)
        return NoAuth()


class NoAuth(HubAuth):
    """No authentication."""


class BearerAuth(HubAuth):
    def __init__(self, spec: HubAuthSpec):
        self._token = spec.secret()

    def headers(self) -> dict[str, str]:
        if self._token:
            return {"Authorization": f"Bearer {self._token}"}
        return {}


class ApiKeyAuth(HubAuth):
    def __init__(self, spec: HubAuthSpec):
        self._key = spec.key or "X-API-Key"
        self._value = spec.secret()
        self._location = (spec.location or "header").lower()

    def headers(self) -> dict[str, str]:
        if self._location == "header" and self._value:
            return {self._key: self._value}
        return {}

    def query_params(self) -> dict[str, str]:
        if self._location == "query" and self._value:
            return {self._key: self._value}
        return {}


class BasicAuth(HubAuth):
    def __init__(self, spec: HubAuthSpec):
        raw = spec.secret()
        self._username = ""
        self._password = ""
        if raw:
            if ":" in raw:
                self._username, self._password = raw.split(":", 1)
            else:
                self._username = raw

    def headers(self) -> dict[str, str]:
        if not self._username:
            return {}
        creds = base64.b64encode(
            f"{self._username}:{self._password}".encode(),
        ).decode()
        return {"Authorization": f"Basic {creds}"}
