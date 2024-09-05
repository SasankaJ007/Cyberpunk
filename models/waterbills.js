const mongoose= require('mongoose');

const BillSchema =new mongoose.Schema({
 BuildingId:{

    type:String,
    required:true,
},

NoOfUnit:{
    type:Number,
    required:true,
},

Amount:{
    type:Number,
    required:true,
},



});


module.exports=mongoose.model('waterbills',BillSchema)