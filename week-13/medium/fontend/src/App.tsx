import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Toaster } from "react-hot-toast";
import Editor from "./components/Editor";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import Blog from "./pages/Blog";
import BulkBlogs from "./pages/BulkBlogs";
import ErrorPage from "./pages/ErrorPage";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

function App() {
	return (
		<>
			<BrowserRouter>
				<Toaster position="top-left" reverseOrder={false} />
				<Navbar />
				<Routes>
					{/* Public Routes */}
					<Route path="/signup" element={<Signup />} />
					<Route path="/signin" element={<Signin />} />

					{/* Protected Routes */}
					<Route
						path="/"
						element={
							<ProtectedRoute>
								<BulkBlogs />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/blog/:id"
						element={
							<ProtectedRoute>
								<Blog />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/editor"
						element={
							<ProtectedRoute>
								<Editor />
							</ProtectedRoute>
						}
					/>

					{/* Catch-all Route */}
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
