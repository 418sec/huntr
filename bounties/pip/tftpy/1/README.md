# Overview

`tftpy` is a Python TFTP library, this package are vulnerable to Directory Traversal outside tftproot. It will not catch a case where the tftproot directory has a sibling file/directory that shares `tftproot` as its prefix.
