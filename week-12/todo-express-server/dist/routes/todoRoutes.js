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
const prisma = new client_1.PrismaClient();
const router = express_1.default.Router();
// create todo
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // validate input
    const validation = validator_1.todoSchema.safeParse(req.body);
    if (!validation.success) {
        return res.status(400).json({ message: "Invalid arguments" });
    }
    const todoData = validation.data;
    try {
        const createTodoResponse = yield prisma.todo.create({
            data: {
                userId: todoData.userId,
                title: todoData.title,
                description: todoData.description,
                done: todoData.done,
            },
        });
        return res
            .status(200)
            .json({ message: "Todo created", createTodoResponse });
    }
    catch (error) {
        return res.status(500).json({ message: "Todo not created", error });
    }
}));
// get todo
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = Number.parseInt(req.params.id);
    if (Number.isNaN(userId)) {
        return res.status(403).json({ message: "Invalid input" });
    }
    try {
        const todos = yield prisma.todo.findMany({
            where: { userId: userId },
            select: {
                id: true,
                title: true,
                description: true,
                done: true,
            },
        });
        if (todos.length === 0) {
            throw new Error("No todos found");
        }
        return res.status(200).json({ todos });
    }
    catch (error) {
        return res.status(500).json({ message: "Error while fethcing todos" });
    }
}));
// update todo - mark as done
router.put("/:todoId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const todoId = Number.parseInt(req.params.todoId);
    if (Number.isNaN(todoId)) {
        return res.status(403).json({ message: "Invalid input" });
    }
    try {
        yield prisma.todo.update({
            where: { id: todoId },
            data: {
                done: true,
            },
        });
        return res.status(200).json({ message: "Todo Updated" });
    }
    catch (error) {
        return res.status(400).json({ message: "Error while updating todo" });
    }
}));
// delete todo
router.delete("/:todoId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todoId = Number.parseInt(req.params.todoId);
        if (Number.isNaN(todoId)) {
            return res.status(403).json({ message: "Invalid input" });
        }
        yield prisma.todo.delete({
            where: { id: todoId },
        });
        return res.status(200).json({ message: "Todo deleted" });
    }
    catch (error) {
        return res.status(400).json({ message: "Error while deleting todo" });
    }
}));
exports.default = router;
