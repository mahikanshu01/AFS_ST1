const express = require('express');
const cors = require('cors');
const {sendOTP}=require('./nodemailer');

const app = express();
app.use(express.static('public'));
app.use(cors());
app.use(express.json());
let otp,userMail; 
app.post('/login',async (req,res) => {
    const user=req.body.email;
    otp = Math.floor(1000 + Math.random() * 9000).toString();
    userMail=user;
    try{
        await sendOTP(user,otp);
        res.send("Otp sent");
    }catch (error) {
        res.status(400).send("Error");
    }
})
app.post('/verification',async (req,res) =>{
    const userOtp=req.body.otp;
    if(userOtp==otp){
        res.send("login successful");
    }else{
        res.status(400).send("wrong otp");
    }
})


app.listen(3000, () => {
    console.log("http://localhost:3000");
});