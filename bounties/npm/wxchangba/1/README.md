# Overview

`wxchangba` is a Campus light application based on node.js and WeChat jssdk, this package are vulnerable to Arbitrary Code Injection.

The package does not validate user input for the `reqPostMaterial` function, thereby passing unsanitized contents of the file parameter to an `exec` call. This could potentially allow attackers to run arbitrary commands in the system.
