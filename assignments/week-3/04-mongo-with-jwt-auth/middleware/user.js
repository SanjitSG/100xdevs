const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');


function userMiddleware(req, res, next) {
    try {
        const token = req.headers.authorization;
        const jwtToken = token.split(" ")[1]

        const decodedValue = jwt.verify(jwtToken, JWT_SECRET);
        console.log(decodedValue);

        if (decodedValue.username) {
            next()
        } else {
            res.json({ message: "Authentication error" })
        }
    } catch (error) {
        res.json({ message: "user login Error", error })
    }
}

module.exports = userMiddleware;