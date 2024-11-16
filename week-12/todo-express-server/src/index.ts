import express from "express";
import mainRouter from "./routes/main-router";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

// routing
app.use("/api/v1", mainRouter);
app.use((req, res) => {
	res.status(404).json({ message: "Route not found" });
});
app.listen(PORT, () => {
	console.log(`Server is listening on -> http://localhost:${PORT}`);
});
