require('dotenv').config();
const sendgrid = require("@sendgrid/mail")

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const apiPort = 5000;

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);



app.use(express().use('*', cors()));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

const emailRoute = require('./routes/emailRoutes');

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.use('/api/contact', emailRoute);



app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
