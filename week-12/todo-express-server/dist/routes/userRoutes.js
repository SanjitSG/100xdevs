"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const express_1 = __importDefault(require("express"));
const validator_1 = require("../input-validation-schema/validator");
const router = express_1.default.Router();
const prisma = new client_1.PrismaClient();
// create user
router.post("/createuser", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //zod validation
    const validation = validator_1.userSchema.safeParse(req.body);
    if (!validation.success) {
        return res.status(400).json({
            message: "user not created!",
            errors: validation.error.errors,
        });
    }
    const userData = validation.data;
    try {
        const existingUser = yield prisma.user.findFirst({
            where: { email: userData.email },
        });
        if (existingUser) {
            return res.status(409).json({ message: "User already exists" });
        }
        // Create a new user
        const newUser = yield prisma.user.create({
            data: {
                name: userData.name,
                email: userData.email,
                password: userData.password,
            },
        });
        return res.status(201).json({
            message: "User created successfully",
            user: newUser,
        });
    }
    catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
}));
// get users
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = Number.parseInt(req.params.id, 10);
        const user = yield prisma.user.findUnique({
            where: { id: userId },
            select: {
                name: true,
                email: true,
                id: true,
            },
        });
        if (!user) {
            return res.status(400).json({ message: "user Doesnt exist" });
        }
        return res.status(200).json(user);
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
}));
// update user
router.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // input validation
        const validation = validator_1.updateUserSchema.safeParse(req.body);
        if (!validation.success) {
            return res.status(400).json({
                message: "Invalid input",
                errors: validation.error.errors,
            });
        }
        // userid checking
        const userId = Number.parseInt(req.params.id, 10);
        if (Number.isNaN(userId)) {
            return res.status(400).json({ message: "Invalid user ID" });
        }
        // getting user data
        const updateData = validation.data;
        if (Object.keys(updateData).length === 0) {
            throw new Error("No fields provided to update");
        }
        // cecking if user exists
        const existingUser = yield prisma.user.findFirst({
            where: { id: userId },
        });
        if (!existingUser) {
            return res.status(409).json({ message: "User does not exists" });
        }
        // Update the user with provided fields
        const updatedUser = yield prisma.user.update({
            where: { id: userId },
            data: updateData,
        });
        return res.status(200).json({
            message: "User updated successfully",
            user: updatedUser,
        });
    }
    catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
}));
// delete user
router.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = Number.parseInt(req.params.id);
        if (Number.isNaN(userId)) {
            return res.status(400).json({ message: "Invalid user ID" });
        }
        // find user
        const existingUser = yield prisma.user.findFirst({
            where: { id: userId },
        });
        if (!existingUser) {
            return res.status(409).json({ message: "User already exists" });
        }
        if (!existingUser) {
            return res.status(400).json({ message: "No user found" });
        }
        // delete user
        const response = yield prisma.user.delete({
            where: { id: userId },
        });
        return res.status(200).json({ response });
    }
    catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
}));
exports.default = router;
