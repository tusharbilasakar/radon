const mongoose = require('mongoose');

const MWuserschema = new mongoose.Schema( {
   
    name:String,

   balance: {
    type: Number,
    default:100,
   },

    address:String,  

    age:Number,

    gender: {
        type: String,
        enum: ["male", "female", "other"] 
    },
   isFreeAppUser:{
    default:false
   }
    
}, { timestamps: true });
