# Overview

`xtalk` lets your browser talks to Node, this package are vulnerable to Directory Traversal, which may allow access to sensitive files and data on the server.

For example, requesting the following url `/../../etc/passwd` would result in `/etc/passwd` leaking.
