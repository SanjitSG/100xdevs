"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBlogSchema = exports.createBlogSchema = exports.signinSchema = exports.signupSchema = void 0;
const zod_1 = __importDefault(require("zod"));
// signup schema
exports.signupSchema = zod_1.default.object({
    email: zod_1.default.string().email("Invalid Email"),
    password: zod_1.default.string().min(6, "Invalid Password"),
    name: zod_1.default.string().optional(),
});
// sign in schema
exports.signinSchema = zod_1.default.object({
    email: zod_1.default.string().email("Invalid Email"),
    password: zod_1.default.string().min(6, "Invalid Password"),
});
// create blog schema
exports.createBlogSchema = zod_1.default.object({
    title: zod_1.default.string(),
    content: zod_1.default.string(),
    authorId: zod_1.default.string().optional(),
});
// udpate blog schema
exports.updateBlogSchema = zod_1.default.object({
    title: zod_1.default.string().optional(),
    content: zod_1.default.string().optional(),
});
