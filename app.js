require('dotenv').config();
const express = require('express');
const app = express();

const sendEmail = require('./controllers/sendEmail')

app.use(express.json());

app.get('/', (req, res) => {
    res.send("<h1>Email send</h1> <a href='/send'>send Email</a>")
})

app.get('/send', sendEmail)

const port = process.env.PORT || 3000


const start = () => {
    try {
        app.listen(port, () => {
            console.log(`Server is Listening at Port no ${port}`);
        })
    } catch (error) {
        console.log(error);
    }
}


start()