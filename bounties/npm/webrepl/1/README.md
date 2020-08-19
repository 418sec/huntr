# Overview

`webrepl` is a Serve a repl for a node process via a web console, this package is vulnerable to Directory Traversal, which may allow access to sensitive files and data on the server.

For example, requesting the following url `/../../etc/passwd` would result in `/etc/passwd` leaking.
