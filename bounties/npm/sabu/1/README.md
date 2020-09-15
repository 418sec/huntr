# Overview

sabu is a Static file server in Node.js, this package is vulnerable to Directory Traversal, which may allow access to sensitive files and data on the server. For example, requesting the following URL: `/../../etc/passwd` would result in the contents of `/etc/passwd` leaking.
