
Affected versions execute arbitrary commands remotely inside the victim's PC. The issue occurs because user input is formatted inside a `command` that will be executed without any checks.

## References

-  [GitHub Permalink](https://github.com/martinj/node-imagickal/blob/master/lib/imagickal.js#L60)