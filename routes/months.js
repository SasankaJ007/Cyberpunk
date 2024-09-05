const express = require('express');
const Months =require('../models/months');

const router=express.Router();

router.post('/month/save',(req,res)=>{

    let newMonth =new Months(req.body);

    newMonth.save((err)=>{
if(err){
    return res.status(400).json({
        error:err
    });
}
return res.status(200).json({
    success:"details saved succuessfully"
});

    });
});


//get month

router.get('/month',(req,res) =>{
    Months.find().exec((err,months)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingMonths:months
        });
  
        
    });  

});


//update 
router.put('/month/update/:id',(req,res)=>{
    Months.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,month)=>{
        if(err){
            return res.status(400).json({error:err});
        }
        return res.status(200).json({
            success:"Udated Successfully"
        });
        }
    );
});

//delete month

router.delete('/month/delete/:id',(req,res)=>{
    Months.findByIdAndRemove(req.params.id).exec((err,deletedMonth)=>{

   if(err)return res.status(400).json({
       message:"Delete Unsuccsrssfull",err

   });

   return res.json({
    message:"Delete scccessfull",deletedMonth

   });


    })



})


router.get("/month/:id",(req,res)=>{

let monthId=req.params.id;

Months.findById(monthId,(err,month)=>{

    if(err){

        return res.status(400).json({success:false,err});
    }

    return res.status(200).json({
        success:true,
        month
    })
})

})

//get latest entered row



router.get("/",(req,res) =>{
    Months.find().sort({$natural: -1 }).limit(1).exec((err,months)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingMonths:months
        });
  
        
    });  

});


    




module.exports=router;