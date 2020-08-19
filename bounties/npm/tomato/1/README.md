# Overview

`tomato` is a Web framework based on Node.js, this package is vulnerable to Arbitrary Code Injection via. the `/api/exec` endpoint. It does not validate user input allowing attackers to run arbitrary commands in the system.
