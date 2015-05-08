var nodemailer= require('nodemailer');
var to = process.argv[2];
var path = require('path');
var config = require('./config.json');
var transport = require('nodemailer-smtp-transport');
var templatesDir   = path.resolve(__dirname, '.', 'templates');
var emailTemplates = require('email-templates');

emailTemplates(templatesDir, function(err, template) {
  if (err) console.log(err);
  else {
    var transporter = nodemailer.createTransport(transport({
      service: 'Mailgun',
      auth: config
    }));

    template('newsletter', { title: 'Hello', text: 'see you' }, function(err, html, text) {
      if (err) console.log(err);
      else {
        // send mail with defined transport object
        transporter.sendMail({
          from: 'Fred Foo ✔ <foo@blurdybloop.com>', // sender address
          to: to, // list of receivers
          subject: 'Hello ✔', // Subject line
          html: html,
          // generateTextFromHTML: true,
          text: text
        }, function(err, info) {
          if (err) {
            console.log(err);
          } else {
            console.log('Message sent: ' + info.response);
          }
        });
      }
    });
  }
});
