const express = require('express');
const inventory2 = require('../models/inventory2');

const router = express.Router();

//Add item

router.post('/exportItem/add', (req,res) =>{

    let newItem = new inventory2(req.body);

    newItem.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Export Item Added Successfully"
        });
    });
});

//Get posts

router.get('/exportItem/retreive', (req,res) =>{
    inventory2.find().exec((err,exportItems) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingItem:exportItems

        });
    });
});

//Get a specific item

router.get("/exportItem/retreive/:id", (req,res) =>{
    let itemid = req.params.id;

    inventory2.findById(itemid,(err,exportItems) =>{
         if(err){
             return res.status(400).json({success:false, err});
         }

         return res.status(200).json({
             success:true,
             exportItems
         });
    });
});

//Update posts

router.put('/exportItem/update/:id', (req,res) =>{
    inventory2.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,exportItems) =>{
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"Update Item Details Succesfully"
            });
        }
    );
});

//Delete post

router.delete('/exportItem/delete/:id',(req,res) =>{
    inventory2.findByIdAndRemove(req.params.id).exec((err,deletedItem) =>{

        if(err) return res.status(400).json({
            message:"Delete Item Unseuccesful",err
        });

        return res.json({
            message:"Delete Item Successful", deletedItem
        });
    });
});

module.exports = router; 