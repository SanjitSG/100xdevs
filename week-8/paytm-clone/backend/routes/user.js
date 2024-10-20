const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { User } = require("../db/db");
const authMiddleware = require("../middleware/middleware");
const {
	userSignupSchema,
	updateUserInfo,
} = require("../input-validator/validator");

//sign up
router.post("/signup", async (req, res) => {
	//zod validation
	const { success } = userSignupSchema.safeParse(req.body);
	if (!success) {
		return res.status(400).json({ message: "Incorrect inputs" });
	}

	//  checking if user already exist
	const existingUser = User.findOne(req.body.username);
	if (existingUser._id) {
		return res.status(411).json({
			message: "User already taken / Incorrect input",
		});
	}

	try {
		// Creating a new user in the database
		const dbUser = await User.create(req.body);

		// generating jwt token
		const token = jwt.sign({ userId: dbUser._id }, process.env.JWT_SECRET);
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
router.put("/update", authMiddleware, async (req, res) => {
	const { success } = updateUserInfo.safeParse(req.body);
	if (!success) {
		return res
			.status(411)
			.json({ message: "Error while updating information" });
	}

	const resp = await User.updateOne({ _id: req.userId }, { $set: req.body });

	res.json({ message: "Updated successfully" });
});

//list of user
module.exports = router;
