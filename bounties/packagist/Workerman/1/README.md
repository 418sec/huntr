# Overview

`workerman` is an asynchronous event driven PHP framework for easily building fast, scalable network applications.

This package is vulnerable to Improper Input Validation. HTTP requests made by workerman does not have adequate validation and as such, allows malformed Transfer-Encoding headers.

In cases where workerman is used as an intermediate proxy such as `php-http-proxy` as part of a part of a chain of servers, it is possible for an attacker to leverage this behaviour to execute HTTP Request Smuggling.

# Proof of Concept

Violation of RFC 7230 (Mishandling of Space)

```
POST / HTTP/1.1
Host: localhost
Transfer-Encoding: chunked
Content-Length: 4
Content-Type: application/x-www-form-urlencoded
```
