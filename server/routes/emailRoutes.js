const emailController = require('../controllers/emailController');
const express = require('express');
const sendgrid = require("@sendgrid/mail")
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

const router = express.Router();

router.post('/sendEmail', emailController.sendEmail
);

// router.post('/sendEmail', (req, res) => {
//     const { fullName, email, message, subject } = req.body
//     sendgrid.send({
//         to: "rgarcia646@gmail.com", // Your email where you'll receive emails
//         from: email,
//         subject:subject,
//         html:`<h3>${fullName}</h3>
//         <p>${message}</p>`
//         })
//         //.then(resp => {
//         res.json({})
//        // })
//         .catch(err => {
//         console.log(err)
//         })
//      })


module.exports = router;