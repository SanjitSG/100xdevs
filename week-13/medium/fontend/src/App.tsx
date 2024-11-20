import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Blog from "./pages/Blog";
import BulkBlogs from "./pages/BulkBlogs";
import ErrorPage from "./pages/ErrorPage";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/signup" element={<Signup />} />
					<Route path="/signin" element={<Signin />} />
					<Route path="/blog" element={<BulkBlogs />} />
					<Route path="/blog/:id" element={<Blog />} />
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
