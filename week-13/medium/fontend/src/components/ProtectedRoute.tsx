import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
	children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
	const isAuthenticated = !!localStorage.getItem("token");

	if (!isAuthenticated) {
		// Redirect to Signin page if not authenticated
		toast.error("Auth Failed!");
		return <Navigate to="/signin" replace />;
	}

	// Render the children if authenticated
	return children;
};

export default ProtectedRoute;
