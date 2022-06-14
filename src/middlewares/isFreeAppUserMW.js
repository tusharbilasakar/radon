
const isFreeAppUser= function ( req, res, next) {
New = req.headers.isFreeAppUser
    console.log("new")
    if(New){
    next()}
    else res.send("the request is missing a mandatory header-isfreeappuser")
}
module.exports.isFreeAppUser=isFreeAppUser