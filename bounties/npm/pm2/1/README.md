# Overview

Affected versions of this package are vulnerable to Command Injection. It is possible to execute arbitrary commands within the pm2.import() function when tar.gz archive is installed with a name provided as user controlled input.
