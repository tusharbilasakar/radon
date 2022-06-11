const mongoose = require('mongoose');

const newPublisherSchema = new mongoose.Schema( {
    author_id: String,
    author_name: String,
    headquarter: String,

}, { timestamps: true });

module.exports = mongoose.model('Publisher', newPublisherSchema)