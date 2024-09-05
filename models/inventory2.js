const { truncate } = require('fs');
const mongoose = require('mongoose');

const exportSchema = new mongoose.Schema({

    itemID:{
        type:Number,
        required:true
    },
    itemName:{
        type:String,
        required:true
    },
    itemCode:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    exportDate:{
        type:String,
        required:true
    },
    exportAddress:{
        type:String,
        required:true
    },
    itemCategory:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Inventory2', exportSchema);