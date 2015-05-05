var nconf = require('nconf');


nconf
  .argv()
  .env()
  .file({ file: 'config.json' });

nconf.set('database:host', '127.0.0.1');
nconf.set('database:port', 5984);


console.log('key: ', nconf.get('key'));
console.log('NODE_ENV: ', nconf.get('NODE_ENV'));
console.log('database: ', nconf.get('database'));
console.log('username: ', nconf.get('username'));
