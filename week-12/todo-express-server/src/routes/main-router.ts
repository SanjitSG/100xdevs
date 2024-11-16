import express from "express";

import todoRouter from "./todoRoutes";
import userRouter from "./userRoutes";

const router = express.Router();

router.use("/user", userRouter);
router.use("/todo", todoRouter);

export default router;
