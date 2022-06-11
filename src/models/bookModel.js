const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const newBookSchema = new mongoose.Schema( {
    name: String,
    author_id: {
        type: ObjectId,
        ref: "Author"
    },
    publisher_id: {
      type: ObjectId,
      ref : "Publisher"
    },

    price: Number,
   


}, { timestamps: true });


module.exports = mongoose.model('book', newBookSchema)
