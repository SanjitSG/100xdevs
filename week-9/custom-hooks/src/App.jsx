import React from "react";
import "./App.css";
import { useIsOnline } from "./hooks/useIsOnline";
import { useTodos } from "./hooks/useTodos";
const App = () => {
	// const { todos, loading } = useTodos();
	const isOnline = useIsOnline();
	return (
		<div id="parent">
			<div id="child">{isOnline ? "🟢" : "🔴"}</div>
			{/* <div id="child">
				{loading ? (
					<div>Loading...</div>
				) : (
					<div>
						{todos.map((todo) => (
							<div key={todo.id}>
								<h4>id: {todo.id}</h4>
								<h2>Title:{todo.title}</h2>
								<h3>Description: {todo.description}</h3>
								<hr />
							</div>
						))}
					</div>
				)}
			</div> */}
		</div>
	);
};

export default App;
