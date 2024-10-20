const JWT_SECRET = process.env.JWT_SECRET;
const jwt = require("jsonwebtoken");
//perform auth
function authMiddleware(req, res, next) {
	const authHeader = req.headers.authorization;

	const token = authHeader.split(" ")[1];
	console.log(token);

	try {
		const decode = jwt.verify(token, JWT_SECRET);
		if (decode.userId) {
			req.userId = decode.userId;
			next();
		}
	} catch (error) {
		return res
			.status(403)
			.json({ message: "Authentication fail at middleware" });
	}
}

module.exports = authMiddleware;
