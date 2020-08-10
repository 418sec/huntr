# Overview

`web-debug` is a static web server with liveload for web development.

This package is vulnerable to Directory Traversal, which may allow access to sensitive files and data on the server. For example, requesting the following url `/../../etc/passwd` would result in `/etc/passwd` leak.
