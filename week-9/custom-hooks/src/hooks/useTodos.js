import axios from "axios";
import { useEffect, useState } from "react";
export const useTodos = () => {
	const [todos, setTodos] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchTodos = async () => {
			try {
				const response = await axios({
					url: "http://192.168.31.162:3000/todos",
					method: "get",
				});
				setTodos(response.data.todos);
			} catch (error) {
				console.error("Error fetching todos:", error);
			} finally {
				setLoading(false);
			}
		};
		fetchTodos();
	}, []);
	return { todos, loading };
};
