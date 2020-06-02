# Overview

[electron-updater](https://github.com/electron-userland/electron-builder/tree/master/packages/electron-updater) is a module allowing applications to implement auto-update functionality.

Affected versions of this package are vulnerable to Signature Validation Bypass. The signature verification check is based on a string comparison between the installed binary’s publisherName and the certificate’s Common Name attribute of the update binary. During a software update, the application will request a file named latest.yml from the update server, which contains the definition of the new release - including the binary filename and hashes.

Using a filename containing a backtick (`), among other symbols and a matching hash, an attacker could bypass the entire signature verification by triggering a parse error in the script.

This can be leveraged to force a malicious update on Windows clients, effectively gaining code execution and persistence capabilities.

Exploitation of this vulnerability requires the attacker to also have control over the update server, or alternatively a man-in-the-middle.

A partial fix has been made available, blacklisting a small set of characters, but there are additional characters that can be used to exploit this vulnerability.

