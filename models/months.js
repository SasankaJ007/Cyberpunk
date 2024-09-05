const mongoose= require('mongoose');
const { stringify } = require('querystring');
const monthSchema =new mongoose.Schema({

    

  month:{

    type:String,
    required:true,
},

PH_vale:{

    type:String,
    required:true,
},


Temperature:{

    type:String,
    required:true,
},


Turbidity_level:{

    type:String,
    required:true,
},
BOD_value:{

    type:String,
    required:true,
},


Hardness:{

    type:String,
    required:true,
},

Chloride:{

    type:String,
    required:true,
},
DissolvedOxygen:{

    type:String,
    required:true,
},
Ammonium:{

    type:String,
    required:true,
},
publicsheddate:{

    type:Date,
    required:true,
},

});


module.exports=mongoose.model('months',monthSchema)


