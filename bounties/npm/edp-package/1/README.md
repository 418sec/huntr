# Overview

`edp-package` is an edp package manager, this package is vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and edit the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on the host server.
