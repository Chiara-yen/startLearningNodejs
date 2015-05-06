var esprima = require('esprima');


var CODE = 'var answer = 42';



var syntax = esprima.parse(CODE);

console.log('syntax:\n', syntax);

// {
//   type: 'Program',
//   body: [
//     {
//       type: 'VariableDeclaration',
//       declarations: [
//         {
//           type: 'AssignmentExpression',
//           operator: =,
//           left: {
//             type: 'Identifier',
//             name: 'answer'
//           },
//           right: {
//             type: 'Literal',
//             value: 42
//           }
//         }
//       ]
//     }
//   ]
// }


var token = esprima.tokenize(CODE);

console.log('token:\n', token);

// [
//   { type: 'Keyword', value: 'var' },
//   { type: 'Identifier', value: 'answer' },
//   { type: 'Punctuator', value: '=' },
//   { type: 'Numeric', value: '42' }
// ]
