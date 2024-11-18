import type { Context, Next } from "hono";
import { verify } from "hono/jwt";

export const authMiddleware = async (c: Context, next: Next) => {
	try {
		const header = c.req.header("authorization")?.replace("Bearer ", "") || "";
		console.log(header);

		const payload = await verify(header, c.env.JWT_SECRET);
		// @ts-ignore
		c.set("user", payload);
		if (payload.id) {
			await next();
		}
	} catch (error) {
		c.status(403);
		return c.json({ error: "unauthorized" });
	}
};
