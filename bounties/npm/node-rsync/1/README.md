Affected versions execute arbitrary commands remotely inside the victim's PC. The issue occurs because user input is formatted inside a `command` that will be executed without any checks. The `spawn` function receives the `_executableShell` variable, which is the `/bin/sh` command. This could result in any command, even if the function is written correctly, leading to `RCE`.

## References

- [GitHub Issue](https://github.com/mattijs/node-rsync/issues/69)
- [GitHub Permalink #1](https://github.com/mattijs/node-rsync/blob/master/rsync.js#L506)