const jwt = require("jsonwebtoken");
require("dotenv").config()

const authentication = (req, res, next) => {
    const token = req.headers?.authorization?.split(" ")[1]
    console.log("token", token)
    if (!token) {
        res.send({"msg":"Please Login"})
    }

    const decoded = jwt.verify(token, process.env.Secret_KEY)
    console.log("decoded", decoded)
    const user_id = decoded.user_id
    if (decoded) {
        req.body.user_id = user_id
        next()
    } else {
        res.send({"msg":"Please Login"})
    }
}

module.exports = { authentication }