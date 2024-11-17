import { PrismaClient } from "@prisma/client";
import express from "express";
import {
	updateUserSchema,
	userSchema,
} from "../input-validation-schema/validator";
const router = express.Router();
const prisma = new PrismaClient();

// create user
router.post("/createuser", async (req: any, res: any) => {
	//zod validation
	const validation = userSchema.safeParse(req.body);
	if (!validation.success) {
		return res.status(400).json({
			message: "user not created!",
			errors: validation.error.errors,
		});
	}
	const userData = validation.data;
	try {
		const existingUser = await prisma.user.findFirst({
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
		return res.status(500).json({ message: "Internal server error" });
	}
});

// get users
router.get("/:id", async (req: any, res: any) => {
	try {
		const userId: number = Number.parseInt(req.params.id, 10);
		const user = await prisma.user.findUnique({
			where: { id: userId },
			select: {
				name: true,
				email: true,
				id: true,
			},
		});
		if (!user) {
			return res.status(400).json({ message: "user Doesnt exist" });
		}
		return res.status(200).json(user);
	} catch (error) {
		res.status(500).json({ message: "Internal server error" });
	}
});

// update user
router.put("/:id", async (req: any, res: any) => {
	try {
		// input validation
		const validation = updateUserSchema.safeParse(req.body);
		if (!validation.success) {
			return res.status(400).json({
				message: "Invalid input",
				errors: validation.error.errors,
			});
		}

		// userid checking
		const userId: number = Number.parseInt(req.params.id, 10);
		if (Number.isNaN(userId)) {
			return res.status(400).json({ message: "Invalid user ID" });
		}

		// getting user data
		const updateData = validation.data;

		if (Object.keys(updateData).length === 0) {
			throw new Error("No fields provided to update");
		}

		// cecking if user exists
		const existingUser = await prisma.user.findFirst({
			where: { id: userId },
		});
		if (!existingUser) {
			return res.status(409).json({ message: "User does not exists" });
		}
		// Update the user with provided fields
		const updatedUser = await prisma.user.update({
			where: { id: userId },
			data: updateData,
		});
		return res.status(200).json({
			message: "User updated successfully",
			user: updatedUser,
		});
	} catch (error) {
		return res.status(500).json({ message: "Internal server error" });
	}
});

// delete user
router.delete("/:id", async (req: any, res: any) => {
	try {
		const userId = Number.parseInt(req.params.id);
		if (Number.isNaN(userId)) {
			return res.status(400).json({ message: "Invalid user ID" });
		}

		// find user
		const existingUser = await prisma.user.findFirst({
			where: { id: userId },
		});
		if (!existingUser) {
			return res.status(409).json({ message: "User already exists" });
		}
		if (!existingUser) {
			return res.status(400).json({ message: "No user found" });
		}

		// delete user
		const response = await prisma.user.delete({
			where: { id: userId },
		});
		return res.status(200).json({ response });
	} catch (error) {
		return res.status(500).json({ message: "Internal server error" });
	}
});
export default router;
