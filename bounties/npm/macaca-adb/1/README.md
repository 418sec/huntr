# Overview
Affected versions execute arbitrary commands remotely inside the victim's PC. The issue occurs because user input is formatted inside a `command` that will be executed without any checks. 

The `deviceId` (user-supplied input) is concatenated to another string and executed through the `exec` function, leading to `RCE` (see also, https://github.com/macacajs/macaca-adb/blob/master/lib/macaca-adb.js#L158).

The `systemPort` and `devicePort` variables are concatenated inside a command and then executed, leading to `RCE`.

`deviceId` and another `argument` are concatenated and formatted inside the command which will be executed, leading to `RCE`.

`deviceId`, `remotePath` and `localPath` are concatenated and executed leading to `RCE` (see also, https://github.com/macacajs/macaca-adb/blob/master/lib/macaca-adb.js#L128)

The `pkg` variable is concatenated and executed through `exec` function.