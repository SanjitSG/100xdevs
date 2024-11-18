import { type Context, Hono } from "hono";
import { authMiddleware } from "../../middleware/auth";

const blog = new Hono();

// middleware
blog.use("/blog/*", authMiddleware);

blog.post("/blog", (c: Context) => {
	return c.text("blog Hono!");
});

blog.put("/blog", (c: Context) => {
	return c.text("blog Hono!");
});

blog.get("/blog/:id", (c: Context) => {
	const id: number = Number.parseInt(c.req.param("id"));
	console.log(c.get("user"));
	return c.text(`blog Hono! ${id}`);
});
export default blog;
