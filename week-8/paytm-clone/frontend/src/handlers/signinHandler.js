import axios from "axios";
import { useNavigate } from "react-router-dom";

export default async function signinHandler({ username, password }) {
	try {
		const response = await axios({
			url: "http://localhost:3000/api/v1/user/signin",
			method: "POST",
			data: { username, password },
			headers: { Authorization: localStorage.getItem("token") },
		});
	} catch (error) {
		console.error("Signin failed:", error.response || error.message);
	}
}
