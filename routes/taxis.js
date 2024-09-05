const express = require('express');
const Taxis = require('../models/taxis');

const router = express.Router();

//save taxibookings

router.post('/taxi/save', (req,res) => {
    
    let newTaxi = new Taxis(req.body);

    newTaxi.save((err) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Taxi Booked Successfully"
        });
    });
});

// //get drivers

// router.get('/drivers',(req,res) => {
//     Drivers.find().exec((err,drivers)=>{
//         if(err){
//             return res.status(400).json({
//                 error:err
//             });
//         }
//         return res.status(200).json({
//             success:true,
//             existingDrivers:drivers
//         });
//     });
// });

// //update drivers

// router.put('/driver/update/:id', (req,res) => {
//    Drivers.findByIdAndUpdate(
//        req.params.id,
//        {
//            $set:req.body,
//        },
//        (err,driver)=>{
//            if(err){
//                return res.status(400).json({error:err});
//            }

//            return res.status(200).json({
//                success:"Updated Successfully"
//            });
//        }
//    );
// });

// //delete drivers

// router.delete('/driver/delete/:id', (req,res)=>{
//     Drivers.findByIdAndRemove(req.params.id).exec((err,deletedDriver) => {
          
//         if(err) return res.status(400).json({
//             message:"Delete Unsuccessfull", err
//         });

//         return res.json({
//             message:"Delete Successfull", deletedDriver
//         });
//     });
// });

// //get a specific driver

// router.get("/driver/:id", (req,res)=> {

//     let driverId = req.params.id;

//     Drivers.findById(driverId,(err,driver) => {
//         if(err){
//             return res.status(400).json({success:false, err});
//         }

//         return res.status(200).json({
//             success:true,
//             driver
//         });
//     });
// });

module.exports = router;