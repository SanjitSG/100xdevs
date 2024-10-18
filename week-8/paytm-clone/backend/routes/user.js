const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { User } = require("../db/db");
const { userSignupSchema } = require("../input-validator/validator");
const { authMiddleware } = require("../middleware/middleware");
const JWT_SECRET = process.env.JWT_SECRET;

//sign up
router.post("/signup", async (req, res) => {
	const { username, password, firstName, lastName } = req.body;
	//zod validation
	const { success } = userSignupSchema.safeParse({
		username,
		password,
		firstName,
		lastName,
	});
	if (!success) {
		return res.status(400).json({ message: "Incorrect inputs" });
	}

	//  checking if user already exist
	const existingUser = User.findOne({
		username,
	});
	if (existingUser._id) {
		return res.status(411).json({
			message: "Email already taken / Incorrect input",
		});
	}

	try {
		// Creating a new user in the database
		const dbUser = await User.create({
			username,
			password,
			firstName,
			lastName,
		});
		// generating jwt token
		const token = jwt({ userId: dbUser._id }, JWT_SECRET);
		res.status(201).json({
			message: "User created!",
			token: `Bearer ${token}`,
		});
	} catch (error) {
		// Handling database errors
		console.error("Error creating user:", error);
		res.status(500).json({ message: "Server error. Could not create user." });
	}
});

//singin
router.post("/signin", authMiddleware, async (req, res) => {
	const { username, password } = req.headers;
	try {
		const response = await User.find({ username, password });
		if (response) {
			res.status(200).json({ message: "Sign in success" });
		} else {
			res.status(400).json({ message: "Error" });
		}
	} catch (error) {
		return res.status(400).json({ error });
	}
});

//update user info

//list of user
module.exports = router;
