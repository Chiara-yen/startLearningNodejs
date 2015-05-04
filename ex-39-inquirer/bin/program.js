var inquirer = require('inquirer');

var times = 0;

inquirer.prompt([

  // confirm
  {
    type: 'confirm',
    name: 'isTimHandsome',
    message: 'Is Tim handsome?',
    default: true
  },

  // list
  {
    type: 'list',
    name: 'theme',
    message: 'What do you want to do?',
    choices: [
      'Talk to Tim',
      'Talk to Roth',
      new inquirer.Separator(),
      'Talk to Randy',
      'Talk to Chiara'
    ]
  },

  // input
  {
    type: 'input',
    name: 'first_name',
    message: 'What\'s your first name',
    default: function () { return 'Tim'; }
  },
  {
    type: 'input',
    name: 'last_name',
    message: 'What\'s your last name'
  },
  {
    type: 'input',
    name: 'phone',
    message: 'What\'s your phone number',
    validate: function( value ) {
      var pass = value.match(/^([01]{1})?[\-\.\s]?\(?(\d{3})\)?[\-\.\s]?(\d{3})[\-\.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i);
      if (pass || times > 0) {
        return true;
      } else {
        times++;
        return 'Please enter a valid phone number';
      }
    }
  }
], function(answers) {
  console.log(JSON.stringify(answers, null, '  '));
});

