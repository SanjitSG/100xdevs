"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTodoSchema = exports.todoSchema = exports.updateUserSchema = exports.userSchema = void 0;
const zod_1 = require("zod");
// 1 new user
exports.userSchema = zod_1.z.object({
    name: zod_1.z.string().min(5, "Name must be 5 characters long"),
    email: zod_1.z.string().email("Invalid email address"),
    password: zod_1.z.string().min(6, "Password must be at least 6 characters long"),
});
// 2 update user
exports.updateUserSchema = zod_1.z.object({
    name: zod_1.z.string().min(5, "Name must be 5 characters long").optional(),
    email: zod_1.z.string().email("Invalid email address").optional(),
    password: zod_1.z
        .string()
        .min(6, "Password must be at least 6 characters long")
        .optional(),
});
// 3 new todo
exports.todoSchema = zod_1.z.object({
    userId: zod_1.z.number(),
    title: zod_1.z.string(),
    description: zod_1.z.string().optional(),
    done: zod_1.z.boolean(),
});
// 4 update todo
exports.updateTodoSchema = zod_1.z.object({
    done: zod_1.z.boolean(),
});
