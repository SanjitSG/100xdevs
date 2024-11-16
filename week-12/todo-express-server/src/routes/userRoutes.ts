import { PrismaClient } from "@prisma/client";
import express, { type Request, type Response } from "express";
import {
	type UserValidator,
	userSchema,
} from "../input-validation-schema/validator";

const router = express.Router();
const prisma = new PrismaClient();

// create user
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
router.post("/createuser", async (req: any, res: any) => {
	//zod validation
	const validation = userSchema.safeParse(req.body);
	if (!validation.success) {
		return res.status(400).json({
			message: "user not created!",
			errors: validation.error.errors,
		});
	}
	const userData: UserValidator = validation.data;

	try {
		const existingUser = await prisma.user.findUnique({
			where: { email: userData.email },
		});

		if (existingUser) {
			return res.status(409).json({ message: "User already exists" });
		}

		// Create a new user
		const newUser = await prisma.user.create({
			data: {
				name: userData.name,
				email: userData.email,
				password: userData.password,
			},
		});

		return res.status(201).json({
			message: "User created successfully",
			user: newUser,
		});
	} catch (error) {
		console.error("Error creating user:", error);
		return res.status(500).json({ message: "Internal server error" });
	}
});
// get users
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
router.get("/getuser", async (req: any, res: any) => {
	try {
		const user = await prisma.user.findFirst({
			where: {
				name: req.body.name,
			},
		});

		return res.status(201).json({
			message: "User found",
			user: user,
		});
	} catch (error) {
		console.error("Error finding user:", error);
		return res.status(500).json({ message: "Internal server error" });
	}
});
// update user
// delete user
export default router;
