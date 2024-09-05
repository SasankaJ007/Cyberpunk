const express = require('express');
const Waterbills=require('../models/waterbills');

const router=express.Router();



router.post('/waterbill/save',(req,res)=>{

    let newWaterBill =new Waterbills(req.body);

    newWaterBill.save((err)=>{
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

//get waterbill

router.get('/waterbill',(req,res) =>{
    Waterbills.find().exec((err,waterbills)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingWaterbills:waterbills
        });
  
        
    });  

});


//update 
router.put('/waterbill/update/:id',(req,res)=>{
    Waterbills.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,waterbill)=>{
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

router.delete('/waterbill/delete/:id',(req,res)=>{
    Waterbills.findByIdAndRemove(req.params.id).exec((err,deletedMonth)=>{

   if(err)return res.status(400).json({
       message:"Delete Unsuccsrssfull",err

   });

   return res.json({
    message:"Delete scccessfull",deletedMonth

   });


    })



})


router.get("/waterbill/:id",(req,res)=>{

let monthId=req.params.id;

Waterbills.findById(monthId,(err,waterbill)=>{

    if(err){

        return res.status(400).json({success:false,err});
    }

    return res.status(200).json({
        success:true,
        waterbill
    })
})

})

module.exports=router;




