import type { PrismaClient } from "@prisma/client/extension";
import { type Env, Hono } from "hono";
import { cors } from "hono/cors";
import access from "./api/v1/access";
import blog from "./api/v1/blog";
import { getPrisma } from "./utils/db";

const app = new Hono<{
	Bindings: { DATABASE_URL: string; JWT_SECRET: string };
	Variables: {
		prisma: PrismaClient;
	};
}>();

// cors
app.use("*", cors());

app.use("*", async (c, next) => {
	const prisma = getPrisma(c.env.DATABASE_URL);
	c.set("prisma", prisma);
	await next();
});

app.route("/api/v1/", access);
app.route("/api/v1/blog", blog);

export default {
	fetch: (request: Request, env: Env, ctx: ExecutionContext) => {
		return app.fetch(request, env, ctx);
	},
};
