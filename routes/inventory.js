const express = require('express');
const inventory = require('../models/inventory');

const router = express.Router();

//Add item

router.post('/importItem/add', (req,res) =>{

    let newItem = new inventory(req.body);

    newItem.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Import Item Added Successfully"
        });
    });
});

//Get posts

router.get('/importItem/retreive', (req,res) =>{
    inventory.find().exec((err,importItems) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingItem:importItems

        });
    });
});

//Get a specific item

router.get("/importItem/retreive/:id", (req,res) =>{
    let itemid = req.params.id;

    inventory.findById(itemid,(err,importItems) =>{
         if(err){
             return res.status(400).json({success:false, err});
         }

         return res.status(200).json({
             success:true,
             importItems
         });
    });
});

//Update posts

router.put('/importItem/update/:id', (req,res) =>{
    inventory.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,importItems) =>{
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

router.delete('/importItem/delete/:id',(req,res) =>{
    inventory.findByIdAndRemove(req.params.id).exec((err,deletedItem) =>{

        if(err) return res.status(400).json({
            message:"Delete Item Unseuccesful",err
        });

        return res.json({
            message:"Delete Item Successful", deletedItem
        });
    });
});

module.exports = router; 