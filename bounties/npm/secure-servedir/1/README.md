# Overview

`secure-servedir` creates a simple web server for a directory, this package is vulnerable to Directory Traversal, which may allow access to sensitive files and data on the server.

For example, requesting the following url `/../../etc/passwd` would result in `/etc/passwd` leaking.
