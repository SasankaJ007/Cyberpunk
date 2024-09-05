const { truncate } = require('fs');
const mongoose = require('mongoose');

const phone = new mongoose.Schema({
    PID:{
        type:String,
        required:true
    },
    PhoneNumber:{
        type:String,
        required:true
    },
    BID:{
        type:String,
        required:true
    },

    SID:{
        type:String,
        required:true
    },

    month:{
        type:String,
        required:true
    },

    Date:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Telephone',phone);



