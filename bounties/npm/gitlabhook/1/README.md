# Overview

Affected versions of this package are vulnerable to Arbitrary Code Execution. Function ExecFile executes commands without any sanitization. User input gets passed directly to this command.
