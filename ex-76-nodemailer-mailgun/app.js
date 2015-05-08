var nodemailer= require('nodemailer');
var to = process.argv[2];
var config = require('./config.json');
var transport = require('nodemailer-smtp-transport');

var transporter = nodemailer.createTransport(transport({
  service: 'Mailgun',
  auth: config
}));

var mailOptions = {
  from: 'Fred Foo ✔ <foo@blurdybloop.com>', // sender address
  to: to, // list of receivers
  subject: 'Hello ✔', // Subject line
  html: '<b>Hello world ✔</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(err, info) {
  if (err) {
    console.log(err);
  } else {
    console.log('Message sent: ' + info.response);
  }
});
