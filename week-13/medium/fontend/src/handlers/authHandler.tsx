import type { SigninSchema, SignupSchema } from "@nexgoa/blog-common";
import axios from "axios";
import type { NavigateFunction } from "react-router-dom";
import { BACKEND_URL } from "../config.tsx";

export const signUpHandler = async (
	signupData: SignupSchema,
	navigate: (path: string) => void,
) => {
	const url = `${BACKEND_URL}/api/v1/signup`;

	try {
		const response = await axios.post(url, signupData, {
			headers: {
				"Content-Type": "application/json",
			},
		});

		const { jwt } = response.data;
		localStorage.setItem("token", jwt);
		navigate("/");
	} catch (error) {
		alert("Error occured during sign up");
		console.error("Error: ", error);
	}
};

export const signinHandler = async (
	signinData: SigninSchema,
	navigate: (path: string) => void,
) => {
	const url = `${BACKEND_URL}/api/v1/signin`;

	try {
		const response = await axios.post(url, signinData, {
			headers: {
				"Content-Type": "application/json",
			},
		});

		const { token } = response.data;
		localStorage.setItem("token", token);
		navigate("/");
	} catch (error) {
		alert("Error occured during signing in");
		console.error("Error: ", error);
	}
};

export const logoutHandle = (navigate: NavigateFunction): void => {
	localStorage.clear();
	navigate("/signin");
};
