const express = require("express");
const app = express();
const cors = require('cors');
const nodemailer = require('nodemailer');
const otpGenerator = require('otp-generator');
require('dotenv').config()

app.use(express.json());
app.use(cors());


function generateOTP() {
 
    return otpGenerator.generate(6, { upperCase: false, specialChars: false, alphabets: false });
}

// Function to send OTP via email
async function sendOTP(email, otp) {
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'bbla20838@gmail.com', 
            pass: '#Aa12345'
        }
    });

    let mailOptions = {
        from: 'abcbc363@gmail.com',
        to: email,
        subject: 'Your OTP',
        text: `Your OTP is: ${otp}`
    };

    try {
        let info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
    } catch (error) {
        console.log('Error occurred while sending email:', error);
    }
}

// Route to generate OTP and send it via email
app.get("/:email", (req, res) => {
    console.log(req.params.email)
    const email = req.params.email;
    const otp = generateOTP();
    
    // Send OTP via email
    sendOTP(email, otp)
        .then(() => {
            res.json({ message: "OTP sent successfully" });
        })
        .catch(error => {
            res.status(500).json({ error: "Failed to send OTP" });
        });
});
app.get('/', (req, res)=>{
    res.json('hello')
})

app.listen(7000, () => {
    console.log("Server running");
});
