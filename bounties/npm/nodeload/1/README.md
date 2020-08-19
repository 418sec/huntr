# Overview

`nodeload-nmickuli` is Load testing library for node.js. Updated for node 0.6.x by nmickuli, this package is vulnerable to Directory Traversal, which may allow access to sensitive files and data on the server. For example, requesting the following URL: `/../../etc/passwd` would result in `/etc/passwd` leaking.
