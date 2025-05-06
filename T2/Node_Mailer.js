// Node marker is a module for node js applications to allow easy mail sending
// npm i nodemailer

var nm = require('nodemailer')
var trans = nm.createTransport(
    {
        host: 'smtp.gmail.com',
        port: 465,
        auth: {
            user: 'sender@gmail.com',
            pass: 'App pass'
        }
    }
)

var mailoption = {
    from: 'sender@gmail.com',
    to: 'reciever@gmail.com',
    subject: 'Testing mail',
    text: 'Kasaa kaay'
}

trans.sendMail(mailoption, (err, info) => {
    if (err) {
        console.log(err)
    } else {
        console.log('Email sent. ' + info.response)
    }
})