const { Admin } = require("../db");


// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // performs auth
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const { username, password } = req.headers

    //hit db - check if this admin exists with given username and password
    const response = await Admin.findOne({
        username,
        password
    })

    if (response) {
        next();
    } else {
        res.json({ message: `Admin with username ${username} doesn't exists` })
    }
}

module.exports = adminMiddleware;