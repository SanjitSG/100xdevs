import type { Context, Next } from "hono";
import { verify } from "hono/jwt";

export const authMiddleware = async (c: Context, next: Next) => {
	try {
		const header = c.req.header("authorization")?.replace("Bearer ", "") || "";

		const payload = await verify(header, c.env.JWT_SECRET);
		c.set("userId", payload.id);
		if (!payload.id) {
			throw new Error("Error verifying user");
		}
		await next();
	} catch (error) {
		c.status(403);
		return c.json({ error: "unauthorized" });
	}
};
