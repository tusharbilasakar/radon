const mongoose = require('mongoose');
const moment = require('moment');
const ObjectId = mogoose.Schema.Types.ObjectId

const ordermodel = new mongoose.Schema({
    userId:{
        type:ObjectId,
        ref: "User",
    },
    ProductId:{
        type:ObjectId,
        ref: "Product"

    },
    amount:{
        type:Number,
        default:0,
    },
    isFreeAppUser:{
        type:Boolean,
    },
    date:{
        type:String,
        default:moment().format("YYYY-DD-MM")

    },
   
},
{ timestamps: true });






