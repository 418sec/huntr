# Overview

`aso-server` is a Simple HTTP server for NodeJS, this package are vulnerable to Directory Traversal, which may allow access to sensitive files and data on the server.

For example, requesting the following URL: `/../../etc/passwd` would result in `/etc/passwd` leaking.
