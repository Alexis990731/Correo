const nodemailer = require("nodemailer");
const express = require("express");
const app = express();
const path = require("path")

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(require("./routes/index"))

app.use(express.static(path.join(__dirname, "public")))

app.listen(3000, () =>{
    console.log("Servidor en -> http:/localhost:3000")
})

/*app.post("/send-email", (req, res) => {
    var transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: "false",
        auth:{
            user : "luisa1@ethereal.email",
            pass : "Kw3GYpMzsMkD1RXVhh"
        }
    })
    
var mailOption = {
    from: "Remitente",
    to: "alexisomg99@gmail.com",
    subject: "Enviado desde nodemailer",
    text: "hola mundo"
}

    transporter.sendMail(mailOption, (error, info) =>{
        if(error){
            res.status(500).send(error.message)
        }else{
            console.log("Email enviado")
            res.status(200).jsonp(req.body)
        }
    })
})
*/