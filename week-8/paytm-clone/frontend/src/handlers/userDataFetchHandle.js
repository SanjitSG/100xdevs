import axios from "axios";

export default async function userDatafetchHandler(filter) {
	const response = await axios.get(
		`http://localhost:3000/api/v1/user/search?q=${filter}`,
	);
	return response.data.users;
}
