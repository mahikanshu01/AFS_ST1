const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: 'gmail', // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "mahikanshu01@gmail.com",
    pass: "waaewmcjswvqyszi",
  },
});

// async..await is not allowed in global scope, must use a wrapper
module.exports.sendOTP=async function sendOTP(user,otp) {
  // send mail with defined transport object
  var Uhtml;
  Uhtml=`Welcome to Password Manager. This is your one-time password: ${otp}
  <h1>If its not you then do report it to us</h1>`
  const info = await transporter.sendMail({
    from: '"Password Manager" <mahikanshu01@gmail.com>', // sender address
    to: user, // list of receivers
    subject: "Your Secret Code", // Subject line
    text: "hlo", // plain text body
    html: Uhtml, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

//sendOTP().catch(console.error);