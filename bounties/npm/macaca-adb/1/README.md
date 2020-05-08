Affected versions execute arbitrary commands remotely inside the victim's PC. The issue occurs because user input is formatted inside a `command` that will be executed without any checks. 

The `deviceId` (user-supplied input) is concatenated to another string and executed through the `exec` function, leading to `RCE` (see also, https://github.com/macacajs/macaca-adb/blob/master/lib/macaca-adb.js#L158).

The `systemPort` and `devicePort` variables are concatenated inside a command and then executed, leading to `RCE`.

`deviceId` and another `argument` are concatenated and formatted inside the command which will be executed, leading to `RCE`.

`deviceId`, `remotePath` and `localPath` are concatenated and executed leading to `RCE` (see also, https://github.com/macacajs/macaca-adb/blob/master/lib/macaca-adb.js#L128)

The `pkg` variable is concatenated and executed through `exec` function.

## References

- [GitHub Issue](https://github.com/macacajs/macaca-adb/issues/27)
- [GitHub Permalink #1](https://github.com/macacajs/macaca-adb/blob/master/lib/macaca-adb.js#L151)
- [GitHub Permalink #2](https://github.com/macacajs/macaca-adb/blob/master/lib/macaca-adb.js#L144)
- [GitHub Permalink #3](https://github.com/macacajs/macaca-adb/blob/master/lib/macaca-adb.js#L116)
- [GitHub Permalink #4](https://github.com/macacajs/macaca-adb/blob/master/lib/macaca-adb.js#L136)
- [GitHub Permalink #5](https://github.com/macacajs/macaca-adb/blob/master/lib/macaca-adb.js#L79)
