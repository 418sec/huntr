# Overview

`infraserver` is a data server, this package are vulnerable to Arbitrary Code Execution due to the default usage of the function `load()` of the package `js-yaml` instead of its secure replacement, `safeLoad()`.