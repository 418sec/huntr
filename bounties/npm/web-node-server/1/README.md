# Overview

`nodeserver` is a Achieve node server's domain name resolution and web application's router, this package is vulnerable to Directory Traversal, which may allow access to sensitive files and data on the server. For example, requesting the following URL: `/../../etc/passwd` would result in `/etc/passwd` leaking.
