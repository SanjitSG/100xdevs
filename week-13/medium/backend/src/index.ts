import type { PrismaClient } from "@prisma/client/extension";
import { type Env, Hono } from "hono";
import blog from "./api/v1/blog";
import signin from "./api/v1/signin";
import signup from "./api/v1/signup";
import { getPrisma } from "./utils/db";

const app = new Hono<{
	Bindings: { DATABASE_URL: string; JWT_SECRET: string };
	Variables: {
		prisma: PrismaClient;
	};
}>();

app.use("*", async (c, next) => {
	const prisma = getPrisma(c.env.DATABASE_URL);
	c.set("prisma", prisma);
	await next();
});

app.route("/api/v1", signup);
app.route("/api/v1", signin);
app.route("/api/v1", blog);

export default {
	fetch: (request: Request, env: Env, ctx: ExecutionContext) => {
		return app.fetch(request, env, ctx);
	},
};
