import axios from "axios";

export default async function signupHandler({
	username,
	password,
	firstname,
	lastname,
	navigate,
}) {
	try {
		const response = await axios({
			url: "http://localhost:3000/api/v1/user/signup",
			method: "POST",
			data: {
				username,
				password,
				firstname,
				lastname,
			},
		});

		localStorage.setItem("token", response.data.token);
		navigate(`/dashboard?name=${response.data.firstname}`);
	} catch (error) {
		console.error(error);
	}
}
