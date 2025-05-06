var path = require('path')
var bp = require('body-parser')
var exp = require('express')
var app = exp()
var url = bp.urlencoded({ extended: true })
var nm = require('nodemailer')
var trans = nm.createTransport(
    {
        host: 'smtp.gmail.com',
        port: 465,
        auth: {
            user: 'sender@gmail.com',
            pass: 'app pass'
        }
    }
)


app.use(exp.static(path.join(__dirname)))

app.post('/check', url, (req, res) => {
    uname = req.body.un
    pass = req.body.pass
    cpass = req.body.cpass
    gender = req.body.gender
    if (pass === cpass) {
        const otp = Math.floor(100000 + Math.random() * 900000);
        var mailoption = {
            from: 'sender@gmail.com',
            to: uname,
            subject: 'Testing mail',
            attachments: [{ filename: 'img.jpg', path: '../upload/img.jpg' }],
            html: `
    <html>
    <head>
        <style>
            body {
                margin: 0;
                padding: 0;
                font-family: Arial, sans-serif;
                line-height: 1.6;
            }
            .otp {
                font-size: 24px;
                font-weight: bold;
                color: #000000;
            }
            .content {
                word-wrap: break-word;
                white-space: normal;
            }
        </style>
    </head>
    <body>
        <p>Hello ${uname},</p>

        <p>Your OTP (One-Time Password) for Volt Ride is: <span class="otp"'>${otp}</span>. This code is required to complete your authentication process.</p>

        <p class="content">If you did not request this OTP, please disregard this email.</p>

        <p class="content">Thank you for choosing Volt Ride!</p>

        <p class="content">Regards,<br>Volt Ride Team</p>
    </body>
    </html>`
        }

        trans.sendMail(mailoption, (err, info) => {
            if (err) {
                console.log(err)
            } else {
                console.log('Email sent. ' + info.response)
            }
        })
        res.set('content-type', 'text/html')
        res.write(`<h3>Username: ${uname}</h3>`)
        res.write(`<h3>Password: ${pass}</h3>`)
        res.write(`<h3>Gender: ${gender}</h3>`)
        res.write(`<h3>Mail sent</h3>`)
    } else {
        res.write(`<h1 style='color: red'>Warning! Password and Confirm Password doesn't match.</h1>`)
    }
    res.send()
})

app.listen(6001)