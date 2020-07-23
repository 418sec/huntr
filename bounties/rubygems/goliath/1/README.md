# Overview

[goliath](https://rubygems.org/gems/goliath) is an Async framework for writing API servers.

It is possible to conductHTTP Request Smuggling attacks where goliath is used as part of a chain of backend servers due to insufficient Content-Length and Transfer Encoding parsing.
