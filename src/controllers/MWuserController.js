const { count } = require("console")
const mwuserModel = require("../models/MWusermodel")




const createuser= async function (req, res) {
    let data= req.body
 let savedData= await BookModel.create(data)
 res.send({msg: savedData})
}
module.exports.createuser=createuser