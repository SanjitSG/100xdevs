import z from "zod";

// signup schema
export const signupSchema = z.object({
	email: z.string().email("Invalid Email"),
	password: z.string().min(6, "Invalid Password"),
	name: z.string().optional(),
});

// sign in schema
export const signinSchema = z.object({
	email: z.string().email("Invalid Email"),
	password: z.string().min(6, "Invalid Password"),
});

// create blog schema
export const createBlogSchema = z.object({
	title: z.string(),
	content: z.string(),
	authorId: z.string().optional(),
});

// udpate blog schema
export const updateBlogSchema = z.object({
	title: z.string().optional(),
	content: z.string().optional(),
});

// types infer
export type SignupSchema = z.infer<typeof signupSchema>;
export type SigninSchema = z.infer<typeof signinSchema>;
export type CreateBlogSchema = z.infer<typeof createBlogSchema>;
export type UpdateBlogSchema = z.infer<typeof updateBlogSchema>;
