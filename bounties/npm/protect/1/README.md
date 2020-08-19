# Overview

`@risingstack/protect` is a package that provides out-of-box, proactive protection for common security problems, like SQL injection attacks, XSS attacks, brute force, etc.

This package are vulnerable to Cross-site Scripting (XSS) via the `isXss()` function in `lib/rules/xss.js`. It can result in dangerous XSS strings being validated as safe.
