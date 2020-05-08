Affected versions result in remote code execution. It allows for the execution of arbitrary commands remotely inside the victim's PC. The issue occurs because user input is formatted inside a `command` that will be executed without any check. 

## References

- [GitHub Issue](https://github.com/codinggirl/simple-open-url/issues/2)
-  [GitHub Permalink](https://github.com/codinggirl/simple-open-url/blob/a9cc868428c7cbec454edf2c602814b9e0814789/src/open.js#L23)