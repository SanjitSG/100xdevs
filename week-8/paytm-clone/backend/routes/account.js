const express = require("express");
const mongoose = require("mongoose");
const authMiddleware = require("../middleware/middleware");
const { Account } = require("../db/db");
const router = express.Router();

// balance route
router.get("/balance", authMiddleware, async (req, res) => {
	const userId = req.userId;
	try {
		const account = await Account.findOne({ userId });
		res.status(200).json({ balance: account.balance });
	} catch (error) {
		console.error("something went wrong", error);
		return res.status(500).json({ message: "Internal Server error" });
	}
});

// transfer route
router.post("/transfer", authMiddleware, async (req, res) => {
	const session = await mongoose.startSession();
	session.startTransaction(); // Start the transaction

	try {
		const { amount, to } = req.body;

		// Fetch the sender's account within the transaction
		const account = await Account.findOne({ userId: req.userId }).session(
			session,
		);
		if (!account || account.balance < amount) {
			throw new Error("Insufficient balance");
		}

		// Fetch the recipient's account within the transaction
		const toAccount = await Account.findOne({ userId: to }).session(session);
		if (!toAccount) {
			throw new Error("Invalid recipient account");
		}

		// Perform the money transfer
		await Account.updateOne(
			{ userId: req.userId },
			{ $inc: { balance: -amount } },
		).session(session); // Deduct from sender's account

		await Account.updateOne(
			{ userId: to },
			{ $inc: { balance: amount } },
		).session(session); // Add to recipient's account

		// Commit the transaction
		await session.commitTransaction();
		res.status(200).json({ message: "Transfer successful" });
	} catch (error) {
		// If anything goes wrong, abort the transaction
		await session.abortTransaction();
		res.status(400).json({ message: error.message });
	} finally {
		session.endSession(); // Ensure the session is ended in any case
	}
});

module.exports = router;
