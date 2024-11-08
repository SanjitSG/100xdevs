import { type Context, Hono, type Next } from "hono";

const app = new Hono();

async function authMiddleware(c: Context, next: Next) {
	if (c.req.header("Authorization")) {
		await next();
	}
	return c.text("You do not have access");
}

app.get("/", authMiddleware, async (c) => {
	return c.text("Welcome to Nex Hono Home page!");
});

export default app;
