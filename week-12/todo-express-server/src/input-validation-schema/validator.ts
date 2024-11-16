import { z } from "zod";

export const userSchema = z.object({
	name: z.string().min(5, "Name must be 5 characters long"),
	email: z.string().email("Invalid email address"),
	password: z.string().min(6, "Password must be at least 6 characters long"),
});

export const todoSchema = z.object({
	title: z.string(),
	description: z.string().optional(),
	done: z.boolean(),
});

export type UserValidator = z.infer<typeof userSchema>;
export type TodoValidator = z.infer<typeof todoSchema>;
