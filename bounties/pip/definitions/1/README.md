# Overview

`definitions` loads and validates YAML definitions against a schema.

This package is vulnerable to Arbitrary Code Execution via. the `load()` method in `definitions/parser.py`.
