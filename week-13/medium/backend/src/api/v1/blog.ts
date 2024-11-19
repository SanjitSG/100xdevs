import { createBlogSchema, updateBlogSchema } from "@nexgoa/blog-common";
import type { PrismaClient } from "@prisma/client/edge";
import { type Context, Hono } from "hono";
import { authMiddleware } from "../../middleware/auth";

const blog = new Hono();

// middleware
blog.use("/*", authMiddleware);

// create post
blog.post("/", async (c: Context) => {
	const prisma: PrismaClient = await c.get("prisma");
	const body = await c.req.json();
	// Todo :
	try {
		const verification = createBlogSchema.safeParse(body);
		if (!verification.success) {
			throw new Error("Invalid content!");
		}
		const newBlog = await prisma.post.create({
			data: {
				title: verification.data.title,
				content: verification.data.content,
				authorId: c.get("userId"),
			},
		});

		c.status(200);
		return c.json({ message: "Blog Post created !", id: newBlog.id });
	} catch (error) {
		return c.json({ message: "Error while creating post" });
	}
});

// update post
blog.put("/:id", async (c: Context) => {
	const prisma: PrismaClient = await c.get("prisma");
	const postId = c.req.param("id");
	const body = await c.req.json();
	// Todo : add zod validation
	try {
		const verification = updateBlogSchema.safeParse(body);
		if (!verification.success) {
			throw new Error("Invalid content!");
		}
		await prisma.post.update({
			where: {
				id: postId,
			},
			data: {
				title: verification.data.title,
				content: verification.data.content,
			},
		});
		c.status(200);
		return c.json({ message: "Blog Post updated !" });
	} catch (error) {
		return c.json({ message: "Error while updating post" });
	}
});

// Todo : add pagination
blog.get("/bulk-blogs", async (c: Context) => {
	const prisma: PrismaClient = await c.get("prisma");
	try {
		const blogs = await prisma.post.findMany();
		console.log(blogs.length);
		if (blogs.length === 0) {
			return c.json({ message: "No blogs found" });
		}

		return c.json({ blogs });
	} catch (error) {
		c.status(411);
		return c.json({ message: "Error while fetching blogs" });
	}
});
// get post by id
blog.get("/:id", async (c: Context) => {
	const postId = c.get("id");
	const prisma: PrismaClient = await c.get("prisma");

	try {
		const blogPost = await prisma.post.findFirst({
			where: {
				id: postId,
			},
		});
		c.status(200);
		return c.json({ blogPost });
	} catch (error) {
		return c.json({ message: "Error while fetching post" });
	}
});

export default blog;
