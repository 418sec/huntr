Affected versions execute arbitrary commands remotely inside the victim's PC. The issue occurs because user input is formatted inside a `command` that will be executed without any checks.

## References

- [GitHub Issue](https://github.com/ecto/node-scp/issues/28)
- [GitHub Permalink](https://github.com/ecto/node-scp/blob/master/scp.js#L22)