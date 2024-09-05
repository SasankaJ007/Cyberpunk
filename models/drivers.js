const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    vehicle_number:{
        type:String,
        required:true
    },
    lisence_number:{
        type:String,
        required:true
    }

});

module.exports = mongoose.model('Drivers', driverSchema);