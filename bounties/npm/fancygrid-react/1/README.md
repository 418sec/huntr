# Description

`fancygrid-react` is vulnerable to `Cross-Site Scripting (XSS)`.

# Steps To Reproduce

1. Open link https://fancygrid.com/docs/getting-started/react and follow the steps to install
```
npx create-react-app my-app
cd my-app
npm install --save fancygrid fancygrid-react
npm start
```
2. Change the content of file src/App.js with the content in the above link.
3. Edit any of the field in data and add the payload `"<img src=x onerror=alert(1)>`. Ex: `{name: 'Ted"<img src=x onerror=alert(1)>', surname: 'Smith',`
5. Navigate to http://localhost:3000/  XSS payload will get executed.
