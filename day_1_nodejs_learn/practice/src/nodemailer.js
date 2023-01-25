var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'avinashdhanani1@gmail.com',
    pass: 'avinash@2808'
  }
});

var mailOptions = {
  from: 'avinashdhanani1@gmail.com',
  to: 'avinashdhanani1@gmail.com',
  subject: 'Sending Email using Node.js',
  html: '<h1>Welcome</h1><p>That was easy!</p>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  } 
});
