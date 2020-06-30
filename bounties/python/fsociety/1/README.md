## Details
The `FSociety` tool is an amazing tool to automatize some `pentesting tools` like `Nmap` in order to provide a `terminal GUI`.
However, the commands are executed through the `python2 formatting system` strings inserted inside the `os.system()` function, which doesn't prevent the injection of new `options/arguments`, but also of new `commands` which aren't supposed to be executed.
Even if the tool isn't a module, so it's harder that it would be used inside a more complex system, it may comport some interesting issues like `RCE` inside a website which could give access via a `web UI` to the tool and return the `result` of the tool.
It's not too difficult find website which do this and the unsanitized concatenation could lead to `arbitrary command injection`.

## POC
Video here: https://vimeo.com/user106572974/review/434090026/10b53c5ee8 (pass: `hacked`)
