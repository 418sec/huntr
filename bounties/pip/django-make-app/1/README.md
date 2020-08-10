# Overview

`django_make_app` is define models and fields using YAML and generate app for Django with views, forms, templates etc.

This package is vulnerable to Arbitrary Code Execution, an exploitable vulnerability exists in the YAML parsing functionality in the `read_yaml_file` method in `io_utils.py` in `django_make_app` 0.1.3. A YAML parser can execute arbitrary Python commands resulting in command execution. An attacker can insert Python code into the loaded YAML to trigger an execution.
