# -*- coding: utf-8 -*-
"""Market provider registry.

Each module under this package exposes a module-level `provider`
instance implementing `MarketProvider`.
"""

from __future__ import annotations

from ...config.hub_registry import list_configured_hubs
from .aliyun import provider as _aliyun_provider
from .base import MarketProvider
from .clawhub import provider as _clawhub_provider
from .configurable import ConfigurableHubProvider
from .modelscope import provider as _modelscope_provider
from .qwenpaw import provider as _qwenpaw_provider


PROVIDERS: dict[str, MarketProvider] = {
    _qwenpaw_provider.key: _qwenpaw_provider,
    _clawhub_provider.key: _clawhub_provider,
    _modelscope_provider.key: _modelscope_provider,
    _aliyun_provider.key: _aliyun_provider,
}

# Dynamically register user-configured third-party hubs.
for _hub_spec in list_configured_hubs():
    PROVIDERS[_hub_spec.key] = ConfigurableHubProvider(_hub_spec)


__all__ = [
    "MarketProvider",
    "PROVIDERS",
]
