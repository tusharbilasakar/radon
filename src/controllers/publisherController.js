const publishermodel = require("../models/publishermodel")

const createPublisher= async function (req, res) {
    let publisher = req.body
    let publisherCreated = await publishermodel.create(publisher)
    res.send({data: publisherCreated})
}


module.exports.createPublisher=createPublisher