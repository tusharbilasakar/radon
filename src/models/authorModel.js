const mongoose = require('mongoose');

const newAuthorSchema = new mongoose.Schema( {
    
    author_name: String,
    age:Number,
    address:String,
    ratings:Number,
    author_id: String,

}, { timestamps: true });

module.exports = mongoose.model('Author', newAuthorSchema)
