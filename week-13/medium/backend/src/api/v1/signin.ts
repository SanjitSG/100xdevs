import type { PrismaClient } from "@prisma/client/extension";
import { Hono } from "hono";
import { sign } from "hono/jwt";

const signin = new Hono<{ Bindings: { JWT_SECRET: string } }>();

signin.post("/signin", async (c) => {
	//@ts-ignore
	const prisma: PrismaClient = c.get("prisma");
	const body = await c.req.json();
	try {
		const user = await prisma.user.findUnique({
			where: {
				email: body.email,
			},
		});

		const token = await sign({ id: user.id }, c.env.JWT_SECRET);
		return c.json({ token });
	} catch (error) {
		return c.json({ message: "Incorrect credentials" });
	}
});

export default signin;
