# Overview

`git-tags-remote` is a Get remote repository tags, this package is vulnerable to Command Injection. The package fails to sanitize the repository input and passes it directly to an `exec` call on the `get` function . This can allow attackers to execute arbitrary code in the system if the repository value passed to the function is user controlled.

# Proof of Concept

```
const gitTagsRemote = require('git-tags-remote');
gitTagsRemote.get('https://github.com/sh0ji/git-tags-remote.git; echo "Injection Success" > /tmp/command-injection.test') .then(tags => console.log(tags));
```
