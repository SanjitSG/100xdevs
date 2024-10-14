import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

import userSchema from "./userSchema"; // Assuming userSchema is defined in a separate file

function App() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(userSchema),
	});

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [token, setToken] = useState(localStorage.getItem("token"));
	const [protectedData, setProtectedData] = useState(null);

	const handleSignup = async (data) => {
		try {
			const response = await axios.post("/signup", data);
			setToken(response.data.token);
			localStorage.setItem("token", response.data.token);
		} catch (error) {
			console.error(error);
		}
	};

	const handleSignin = async (data) => {
		try {
			const response = await axios.post("/signin", data);
			setToken(response.data.token);
			localStorage.setItem("token", response.data.token);
		} catch (error) {
			console.error(error);
		}
	};

	const handleGetProtectedData = async () => {
		try {
			const response = await axios.get("/protected", {
				headers: { Authorization: `Bearer ${token}` },
			});
			setProtectedData(response.data);
		} catch (error) {
			console.error(error);
		}
	};

	// ... rest of your React component
}
