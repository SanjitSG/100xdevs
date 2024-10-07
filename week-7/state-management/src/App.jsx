import React from "react";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/countAtom";

const App = () => {
	return (
		<RecoilRoot>
			<Counter />
		</RecoilRoot>
	);
};

function Counter() {
	return (
		<div>
			<RenderCount />
			<Buttons />
			<RenderEven />
		</div>
	);
}

function RenderCount() {
	const count = useRecoilValue(countAtom);
	return <div>{count}</div>;
}

function Buttons() {
	const setCount = useSetRecoilState(countAtom);
	return (
		<div>
			<button
				type="button"
				onClick={() => {
					setCount((count) => count + 1);
				}}
			>
				Increment
			</button>
			<button
				type="button"
				onClick={() => {
					setCount((count) => count - 1);
				}}
			>
				Increment
			</button>
		</div>
	);
}

function RenderEven() {
	const isEven = useRecoilValue(evenSelector);
	return (
		<div>{isEven === 0 ? <div>Even Number</div> : <div>Odd Number</div>}</div>
	);
}
export default App;
