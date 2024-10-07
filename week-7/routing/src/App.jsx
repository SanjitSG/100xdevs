import { Suspense } from "react";
import { lazy } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
const Dashboard = lazy(() => import("./components/Dashboard"));
// import Dashboard from "./components/Dashboard";
import Landing from "./components/Landing";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Appbar />
				<Routes>
					<Route
						path="/dashboard"
						element={
							<Suspense fallback={"loading..."}>
								<Dashboard />
							</Suspense>
						}
					/>
					<Route
						path="/"
						element={
							<Suspense fallback={"loading..."}>
								<Landing />
							</Suspense>
						}
					/>
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
