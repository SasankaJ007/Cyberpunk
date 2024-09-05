const mongoose = require('mongoose');

const taxiSchema = new mongoose.Schema({

    booking_type:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    mobile_number:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    pickup_location:{
        type:String,
        required:true
    },
    destination_location:{
        type:String,
        required:true
    },
    no_of_passangers:{
        type:String,
        required:true
    }

});

module.exports = mongoose.model('Taxis', taxiSchema);