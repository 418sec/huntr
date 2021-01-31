# Overview

quickserver is Quickly start a Node.js instance serving static files, this package is vulnerable to Directory Traversal, which may allow access to sensitive files and data on the server. For example, requesting the following URL: `/../../etc/passwd` would result in `/etc/passwd` leaking.
