var validator = require('validator');

console.log('foo@bar.com\n', 'isEmail', validator.isEmail('foo@bar.com'));
console.log('https://github.com/chriso/validator.js\n', 'isEmail', validator.isEmail('https://github.com/chriso/validator.js'));


console.log('foo@bar.com\n', 'isURL', validator.isURL('foo@bar.com'));
console.log('https://github.com/chriso/validator.js\n', 'isURL', validator.isURL('https://github.com/chriso/validator.js'));


console.log('127.0.0.1\n', 'isIP', validator.isIP('127.0.0.1'));
console.log('2001:DB8:2de:0:0:0:0:e13\n', 'isIP', validator.isIP('2001:DB8:2de:0:0:0:0:e13'));
console.log('127001\n', 'isIP', validator.isIP('127001'));


console.log('4716368472599727\n', 'isCreditCard', validator.isCreditCard('4716368472599727'));
console.log('4321\n', 'isCreditCard', validator.isCreditCard('4321'));


console.log('6b3a2b30-f2ee-11e4-b939-0800200c9a66\n', 'isUUID', validator.isUUID('6b3a2b30-f2ee-11e4-b939-0800200c9a66'));
console.log('6b3a2b30-f2ee-11e4-b939\n', 'isUUID', validator.isUUID('6b3a2b30-f2ee-11e4-b939'));


console.log('YXNkYXNkc2R2YWFzbG5rc2FkbnZsc2EnZHY=\n', 'isBase64', validator.isBase64('YXNkYXNkc2R2YWFzbG5rc2FkbnZsc2EnZHY='));
console.log('asdasdsdvaaslnksadnvlsa"dv\n', 'isBase64', validator.isBase64('asdasdsdvaaslnksadnvlsa"dv'));


console.log('ccc\n', 'isHexColor', validator.isHexColor('ccc'));
console.log('ggg0000\n', 'isHexColor', validator.isHexColor('ggg0000'));


console.log('ccc12312asdafas\n', 'isAlphanumeric', validator.isAlphanumeric('ccc12312asdafas'));
console.log('ggg-0000\n', 'isAlphanumeric', validator.isAlphanumeric('ggg-0000'));
