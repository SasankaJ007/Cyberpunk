const express =require('express');
const bodyParser=require('body-parser')
const nodemailer=require('nodemailer')

const { response } = require('express');


const router=express.Router();


router.get('/',()=>{
resizeBy.send('welcome to the form')

})

router.post('/api/forma',(req,res)=>{

    let data=req.body
    let smtpTransport=nodemailer.createTransport({
    service:'Gmail',
    port:465,
    auth:{


        user:`waterresourceunit.cyberpunk@gmail.com`,
        pass:`1234567a#`
    }

    });


    
let mailOption={
       from:data.emil,
       to:`${data.email}`,
       subject:`message from hhgh`,
       html:`
        <h3>Informations</h3>
        <ul>
        
        <li>Email:${data.email}</li>
        </ul>
         
        <h3>Nortice</h3>
        <p>${data.message}</p>

       `

    };

    
    smtpTransport.sendMail(mailOption, (error,response)=>{
      
        if(error){
            res.send(error);
        }
        else{
            res.send('success');
        }
       smtpTransport.close();

    })
  
   

})

module.exports=router;