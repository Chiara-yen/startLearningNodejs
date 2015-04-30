var request = require('request');

request('http://localhost:3000/', function (err, response, body) {
  if (!err && response.statusCode === 200) {
    console.log(body);
  }
});
