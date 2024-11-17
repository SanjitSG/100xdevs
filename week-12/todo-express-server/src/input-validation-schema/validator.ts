import { z } from "zod";

// 1 new user
export const userSchema = z.object({
	name: z.string().min(5, "Name must be 5 characters long"),
	email: z.string().email("Invalid email address"),
	password: z.string().min(6, "Password must be at least 6 characters long"),
});
export type UserValidator = z.infer<typeof userSchema>;

// 2 update user
export const updateUserSchema = z.object({
	name: z.string().min(5, "Name must be 5 characters long").optional(),
	email: z.string().email("Invalid email address").optional(),
	password: z
		.string()
		.min(6, "Password must be at least 6 characters long")
		.optional(),
});
export type UpdateValidator = z.infer<typeof updateUserSchema>;

// 3 new todo
export const todoSchema = z.object({
	userId: z.number(),
	title: z.string(),
	description: z.string().optional(),
	done: z.boolean(),
});
export type TodoValidator = z.infer<typeof todoSchema>;

// 4 update todo

export const updateTodoSchema = z.object({
	done: z.boolean(),
});
export type UpdateTodoValidator = z.infer<typeof updateTodoSchema>;
