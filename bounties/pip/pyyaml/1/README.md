# Overview

`pyyaml` is a YAML parser and emitter for Python.

This package is vulnerable to Arbitrary Code Execution. It processes untrusted YAML files through the `full_load` method or with the `FullLoader` loader. This is due to an incomplete fix for CVE-2020-1747.
