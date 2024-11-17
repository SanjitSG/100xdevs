import { PrismaClient } from "@prisma/client";
import express from "express";
import { todoSchema } from "../input-validation-schema/validator";

const prisma = new PrismaClient();
const router = express.Router();

// create todo
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
router.post("/", async (req: any, res: any) => {
	// validate input
	const validation = todoSchema.safeParse(req.body);

	if (!validation.success) {
		return res.status(400).json({ message: "Invalid arguments" });
	}

	const todoData = validation.data;
	try {
		const createTodoResponse = await prisma.todo.create({
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
	} catch (error) {
		return res.status(500).json({ message: "Todo not created", error });
	}
});

// get todo
router.get("/:id", async (req: any, res: any) => {
	const userId = Number.parseInt(req.params.id);
	if (Number.isNaN(userId)) {
		return res.status(403).json({ message: "Invalid input" });
	}

	try {
		const todos = await prisma.todo.findMany({
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
	} catch (error) {
		return res.status(500).json({ message: "Error while fethcing todos" });
	}
});
// update todo - mark as done
router.put("/:todoId", async (req: any, res: any) => {
	const todoId: number = Number.parseInt(req.params.todoId);
	if (Number.isNaN(todoId)) {
		return res.status(403).json({ message: "Invalid input" });
	}

	try {
		await prisma.todo.update({
			where: { id: todoId },
			data: {
				done: true,
			},
		});
		return res.status(200).json({ message: "Todo Updated" });
	} catch (error) {
		return res.status(400).json({ message: "Error while updating todo" });
	}
});
// delete todo
router.delete("/:todoId", async (req: any, res: any) => {
	try {
		const todoId: number = Number.parseInt(req.params.todoId);
		if (Number.isNaN(todoId)) {
			return res.status(403).json({ message: "Invalid input" });
		}

		await prisma.todo.delete({
			where: { id: todoId },
		});
		return res.status(200).json({ message: "Todo deleted" });
	} catch (error) {
		return res.status(400).json({ message: "Error while deleting todo" });
	}
});
export default router;
