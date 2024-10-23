import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Appbar from "./components/Appbar";
import Dashboard from "./pages/Dashboard";
import SendMoney from "./pages/SendMoney";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

function App() {
	return (
		<>
			<Router>
				<Appbar />
				<Routes>
					<Route path="/signin" element={<Signin />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/send" element={<SendMoney />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
