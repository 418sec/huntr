Affected versions execute arbitrary commands remotely inside the victim's PC. The issue occurs because user input is formatted inside a `command` that will be executed without any checks. The `cmd` list is stringed and executed inside the `exec` function without checking the `buildRoot` and `specFile` variables, which are controlled by the user, leading to `RCE`.

## References

- [GitHub Issue](https://github.com/rictorres/node-rpm-builder/issues/35)
- [GitHub Permalink #1](https://github.com/rictorres/node-rpm-builder/blob/552b627e5c9416d552e0fa1347ef5220de8a7ffb/index.js#L123)
- [GitHub Permalink #2](https://github.com/rictorres/node-rpm-builder/blob/master/index.js#L119)