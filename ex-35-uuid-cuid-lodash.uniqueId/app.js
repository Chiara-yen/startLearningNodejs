var uuid = require('uuid');
var cuid = require('cuid');
var uniqueId = require('lodash').uniqueId;

var PREFIX = 'prefix_';

console.log('uuid: ', uuid.v4());
console.log('cuid: ', cuid());
console.log('lodash.uniqueId: ', uniqueId()); // unique in this process
console.log('lodash.uniqueId with prefix: ', uniqueId(PREFIX));
