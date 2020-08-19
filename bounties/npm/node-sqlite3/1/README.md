# Overview

`npm-test-sqlite3-trunk` module provides asynchronous, non-blocking SQLite3 bindings, this package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol.

Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.
