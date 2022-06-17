const authenticate = function (req, req, next) {
    //check the token in request header
    //validate this token
        let token = req.headers["x-Auth-token"];
       if (!token) token = req.headers["x-auth-token"];
       if (!token) 
       return res.send({ status: false, msg: "token must be present" });
       
       let decodedToken = jwt.verify(token, "functionup-radon");
       if (!decodedToken)
         return res.send({ status: false, msg: "token is invalid" });
         next()
       
       
    

    next()

    }

const authorise = function (req, res, next) {
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
    if (!token) return res.send({ status: false, msg: "token must be present" });
  
    console.log(token)

    let decodedToken =  jwt.verify(token, "functionup-thorium");
    if (!decodedToken)
      return res.send({ status: false, msg: "token is invalid" });

      let userToBeModified = req.params.userId
      let userLoggedIn = decodedToken.userId
      if(userToBeModified != userLoggedIn)
       return
        res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})
  
  next()
}

module.exports.authenticate=authenticate
module.exports.authorise=authorise