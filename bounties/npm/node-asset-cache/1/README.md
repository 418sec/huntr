# Overview

asset-cache is a Asset server with caching in node.js. Used for local development.
Affected versions of the package are vulnerable to Directory Traversal, which may allow access to sensitive files and data on the server. For example, requesting the following url: `/..%2f..%2fetc/passwd` would result in a leak of `/etc/passwd`.

A Directory Traversal attack aims to access files and directories that are stored outside the intended folder. By manipulating files with `../` sequences and other variations, or by using absolute file paths, it may be possible to access arbitrary files and directories stored on the file system, including source code, configuration, and other critical system files.
