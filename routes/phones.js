const express = require('express');
const Phones=require('../models/phones');

const router = express.Router();


//added 
router.post('/phone/add', (req,res) =>{

    let newPhone = new Phones(req.body);

    newPhone.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Phone added successfully"
        });
    });
});


//read
router.get('/phone/ret', (req,res) =>{
    Phones.find().exec((err,posts) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPhones:posts
        });
    });
});

//get specific Phone

router.get("/phone/:id",(req,res) =>{
    let phoneId = req.params.id;

    Phones.findById(phoneId,(err,post)=>{
       if(err){
           return res.status(400).json({success:false,err});
       }

       return res.status(200).json({
           success:true,
           post
       });
    });
  
});
//update
router.put('/phone/update/:id',(req,res)=>{
    Phones.findByIdAndUpdate(
        req.params.id,
        {
             $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                sucess:"Phone Updated Succesfully"
            });
        }
    );
});

//delete number

router.delete('/phone/delete/:id',(req,res)=>{
    Phones.findByIdAndRemove(req.params.id).exec((err,deletedPost) =>{
        if(err) return res.status(400).json({
            messages:"Delete Unsuccesful" ,err
        });
        return res.json({
            message:"Phone Delete Success" ,deletedPost
        });
    });
});
module.exports = router;