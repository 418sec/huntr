
Affected versions execute arbitrary commands remotely inside the victim's PC. The issue occurs because user input is formatted inside a `command` that will be executed without any checks.

## References

- [GitHub Issue](https://github.com/forsigner/node-pngdefry/issues/9)
- [GitHub Permalink](https://github.com/forsigner/node-pngdefry/blob/master/lib/index.js#L54)