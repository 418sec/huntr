# Overview

`reecerver` is Starts a simple web server, this package are vulnerable to Directory Traversal, which may allow access to sensitive files and data on the server. For example, requesting the following URL: `/../../etc/passwd` would result in `/etc/passwd` leaking.
