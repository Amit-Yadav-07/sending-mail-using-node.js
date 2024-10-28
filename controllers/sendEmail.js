const nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail')

// ethereal service
const sendEmailEthereal = async (req, res) => {
    const testAccount = await nodemailer.createTestAccount();
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'bernie.sauer93@ethereal.email',
            pass: 'q4a5YjGeCk8aSZnZCa'
        }
    });

    let info = await transporter.sendMail({
        from: '"Amit Yadav" <amitsinghyadav974@gmail.com>',
        to: 'sandwhite021@gmail.com',
        subject: 'hello there',
        html: '<h1>sending email with node.js</h1>'
    })


    res.json(info)
}

// sendGrid
const sendEmail = async (req, res) => {

    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
        to: 'mkpgtr@gmail.com', // Change to your recipient
        from: 'amitsinghyadav974@gmail.com', // Change to your verified sender
        subject: 'Sending with SendGrid is Fun',
        text: 'hello there',
        html: '<strong>sending email from node.js</strong>',
    }

    const info = await sgMail.send(msg);
    res.json(info)
}

module.exports = sendEmail;