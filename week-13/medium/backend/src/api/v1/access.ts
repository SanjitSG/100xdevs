import {
	type SigninSchema,
	type SignupSchema,
	signinSchema,
	signupSchema,
} from "@nexgoa/blog-common";
import type { PrismaClient } from "@prisma/client/edge";
import { type Context, Hono } from "hono";
import { sign } from "hono/jwt";

const access = new Hono<{
	Bindings: { JWT_SECRET: string };
	Variables: { prisma: PrismaClient };
}>();

interface User {
	email: string;
	password: string;
	name?: string;
}
access.post("/signup", async (c: Context) => {
	const prisma: PrismaClient = c.get("prisma");
	const body = await c.req.json();

	try {
		const verification = signupSchema.safeParse(body);
		if (!verification.success) {
			throw new Error(verification.error.message);
		}
		const { email, password, name }: SignupSchema = verification.data;
		const newUser = await prisma.user.create({
			data: {
				email,
				password,
				name,
			},
		});
		const jwt = await sign({ id: newUser.id }, c.env.JWT_SECRET);
		return c.json({ message: "Sign-up success", jwt }, 201);
	} catch (error) {
		return c.json({ error: "An error occurred during signup" }, 500);
	}
});

access.post("/signin", async (c: Context) => {
	const prisma: PrismaClient = c.get("prisma");
	const body = await c.req.json();

	try {
		const verification = signinSchema.safeParse(body);
		if (!verification.success) {
			throw new Error(verification.error.message);
		}
		const { email, password }: SigninSchema = verification.data;
		const userExists = await prisma.user.findFirst({
			where: {
				email,
				password,
			},
			select: {
				id: true,
			},
		});

		if (!userExists) {
			// to prevent runtime err: in case userExists is null
			throw new Error("user not found");
		}
		const jwt = await sign({ id: userExists.id }, c.env.JWT_SECRET);
		return c.json({ message: "Sign-in Success", token: jwt }, 201);
	} catch (error) {
		console.log(error);

		return c.json({ error: "An error occurred during signin" }, 500);
	}
});

export default access;
