const {Router} = require("express");
const nodemailer = require("nodemailer")
const router = Router(); 

router.post("/send-email", async (req, res) => {
    const {name, email, phone, message} = req.body;

    contentHTML = `
        <h1>User Information</h1>
        <ul>
            <li>Username: ${name}</li>
            <li>User Email: ${email}</li>
            <li>PhoneNumber: ${phone}</li>
        </ul>
        <p>${message}</p>
    `;

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
            user: 'luisa1@ethereal.email',
            pass: 'Kw3GYpMzsMkD1RXVhh'
        },
        tls:{
            rejectUnauthorized: false
        }
    });

    const info = await transporter.sendMail({
        from: "'Luisa <luisa1@ethereal.email>'",
        to: 'alexisomg99@gmail.com',
        subject: "Clientes",
        html: contentHTML
    });

    console.log("message sent", info.messageId)

    res.redirect("/succes.html")
})

module.exports = router;