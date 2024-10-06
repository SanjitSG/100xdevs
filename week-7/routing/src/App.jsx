import "./App.css";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Landing from "./components/Landing";
const Dashboard = React.lazy(() => import("./components/Dashboard"));

function App() {
	return (
		<div>
			<BrowserRouter>
				<Appbar />
				<Routes>
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/" element={<Landing />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

function Appbar() {
	const navigate = useNavigate();

	return (
		<div>
			<button
				type="button"
				onClick={() => {
					navigate("/");
				}}
			>
				Home
			</button>
			<button
				type="button"
				onClick={() => {
					navigate("/dashboard");
				}}
			>
				Dashboard
			</button>
		</div>
	);
}
export default App;
