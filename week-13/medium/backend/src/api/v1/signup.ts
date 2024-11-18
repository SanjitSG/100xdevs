import type { PrismaClient } from "@prisma/client/extension";
import { Hono } from "hono";
import { sign } from "hono/jwt";
const signup = new Hono<{ Bindings: { JWT_SECRET: string } }>();

signup.post("/signup", async (c) => {
	//@ts-ignore
	const prisma: PrismaClient = c.get("prisma");
	const body = await c.req.json();
	const { email, password } = body;

	if (!email || !password) {
		return c.json({ error: "Email and password are required" }, 400);
	}

	try {
		const newUser = await prisma.user.create({
			data: {
				email,
				password,
			},
		});

		const token = await sign({ id: newUser.id }, c.env.JWT_SECRET);

		return c.json({ message: "Signup successful", token }, 201);
	} catch (error) {
		console.error("Error signing up:", error);
		return c.json({ error: "An error occurred during signup" }, 500);
	}
});

export default signup;
