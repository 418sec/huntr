# Overview
[express-brute](https://www.npmjs.com/package/express-brute) is a brute-force protection middleware for express routes that rate-limits incoming requests, increasing the delay with each request in a fibonacci-like sequence.

Affected versions of this package are vulnerable to Rate Limiting Bypass due to incorrectly counting the number of requests sent, this allows an attacker to bypass the rate-limiting mechanism.