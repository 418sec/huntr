# Overview

`simple-npm-registry` implements an npm registry which forwards requests to `registry.npmjs.org`, this package are vulnerable to Directory Traversal, which may allow access to sensitive files and data on the server.

For example, requesting the following URL: `/../../etc/passwd` would result in `/etc/passwd` leaking.
