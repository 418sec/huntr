Affected versions execute arbitrary commands remotely inside the victim's PC. The issue occurs because user input is formatted inside a `command` that will be executed without any checks. There is a possible bypass of the `_checkSerial` function leading to malicious `serial` variable content injection. Then, the `serial` variable is concatenated inside a `command` executed through the `exec` function, leading to `RCE`. 

## References

- [GitHub Issue](https://github.com/thebeet/idevicekit/issues/9)
- [GitHub Permalink #1](https://github.com/thebeet/idevicekit/blob/master/index.js#L11)
- [GitHub Permalink #2](https://github.com/thebeet/idevicekit/blob/master/index.js#L39)