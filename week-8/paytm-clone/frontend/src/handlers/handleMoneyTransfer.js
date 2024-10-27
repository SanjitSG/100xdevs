import axios from "axios";
export default async function handleMoneyTransfer(id, amount) {
	const response = await axios({
		url: "http://localhost:3000/api/v1/account/transfer",
		method: "POST",
		data: {
			id,
			amount,
		},
		headers: {
			Authorization: localStorage.getItem("token"),
		},
	});

	console.log(response);
}
