import React, { useState } from "react";
import "./App.css";
import { useDebounce } from "./hooks/useDebounce";
import { useInterval } from "./hooks/useInterval";
import { useIsOnline } from "./hooks/useIsOnline";
import { useMousePointer } from "./hooks/useMousePointer";
import { useTodos } from "./hooks/useTodos";
const App = () => {
	const [count, setCount] = useState(0);
	const [searchVal, setSearchVal] = useState("");
	// const { todos, loading } = useTodos();
	const isOnline = useIsOnline();
	const pointer = useMousePointer();

	useInterval(() => {
		setCount((count) => count + 1);
	}, 1000);

	const debouncedVal = useDebounce(searchVal, 300);
	return (
		<div id="parent">
			<div id="child">Online status: {isOnline ? "🟢" : "🔴"}</div>
			<div className="mouse">
				Mouse position X: {pointer.x}, Y: {pointer.y}
			</div>
			<div id="counter">Count {count}</div>
			<div id="search-container">
				<input
					type="text"
					name="search"
					id="search"
					placeholder="Search.."
					value={searchVal}
					onChange={(e) => {
						setSearchVal(e.target.value);
					}}
				/>
			</div>
			<div>Debounce Value: {debouncedVal}</div>
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
