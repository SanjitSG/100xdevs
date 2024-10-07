import React, { useContext, useState, Provider } from "react";
import { CountContext } from "./context";

const AppNew = () => {
	const [count, setCount] = useState(0);

	return (
		<div>
			<CountContext.Provider value={{ count, setCount }}>
				<Counter />
			</CountContext.Provider>
		</div>
	);
};

function Counter() {
	return (
		<div>
			<CounterRender />
			<Buttons />
		</div>
	);
}

function CounterRender() {
	const count = useContext(CountContext);
	return <div>{count}</div>;
}

function Buttons() {
	const { count, setCount } = useContext(CountContext);
	return (
		<div>
			<button
				type="button"
				onClick={() => {
					setCount(count + 1);
				}}
			>
				Increment
			</button>
			<button
				type="button"
				onClick={() => {
					setCount(count - 1);
				}}
			>
				Decrement
			</button>
		</div>
	);
}
export default AppNew;
