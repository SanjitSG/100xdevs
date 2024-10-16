const { JWT_SECRET } = require("../config");
const { Admin } = require("../db");
const jwt = require('jsonwebtoken')
// Middleware for handling auth
function adminMiddleware(req, res, next) {
    try {
        const token = req.headers.authorization;

        const jwtToken = token.split(" ")[1]

        const decodedValue = jwt.verify(jwtToken, JWT_SECRET)
        console.log(decodedValue.username);

        if (decodedValue.username) {
            next()
        } else {
            res.status(403).json({
                msg: "You are not authenticated"
            })
        }
    }
    catch (error) {
        res.json({
            msg: "Incorrect inputs", error
        })
    }
}

module.exports = adminMiddleware;