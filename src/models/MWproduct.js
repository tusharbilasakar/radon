const mongoose = require('mongoose');


const productmodel = new mongoose.Schema ({
    name:String,
    category:String,
    price:{
        type:Number,
        require:true}

})