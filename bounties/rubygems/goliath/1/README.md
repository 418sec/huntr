# Overview
[goliath](https://rubygems.org/gems/goliath) is an Async framework for writing API servers.

Affected versions of this package are vulnerable to HTTP Request Smuggling. HTTP pipelining issues and request smuggling attacks might be possible due to incorrect Content-Length and Transfer encoding header parsing.

It is possible to conduct HTTP request smuggling attacks where goliath is used as part of a chain of backend servers due to insufficient Content-Length and Transfer Encoding parsing.