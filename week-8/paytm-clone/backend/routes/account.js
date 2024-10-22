const express = require("express");
const mongoose = require("mongoose");
const authMiddleware = require("../middleware/middleware");
const { Account } = require("../db/db");
const router = express.Router();

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

router.post("/transfer", authMiddleware, async (req, res) => {
	const session = await mongoose.startSession();

	session.startTransaction();
	const { amount, to } = req.body;

	//fetching account within the transaction
	const account = await Account.findOne({ userId: req.userId }).session(
		session,
	);

	if (!account || account.balance < amount) {
		return res.status(400).json({
			message: "Insufficient balance",
		});
	}

	const toAccount = await Account.findOne({ userId: to }).session(session);

	if (!toAccount) {
		return res.status(400).json({
			message: "Invalid Account",
		});
	}

	//perform transfer
	await Account.updateOne(
		{ userId: req.userId },
		{ $inc: { balance: -amount } },
	).session(session);
	await Account.updateOne(
		{ userId: to },
		{ $inc: { balance: amount } },
	).session(session);

	//commit the transaction
	await session.commitTransaction();
	res.json({
		message: "Transfer successful",
	});
});
module.exports = router;
