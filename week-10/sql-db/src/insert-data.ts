import { getClient } from "./utils";

async function createEntries() {
	const client = await getClient();
	const insertUserText =
		"INSERT INTO users(email, password) VALUES($1, $2) RETURNING id";
	const userValues = ["john@gmail.com", "123123"];

	const response = await client.query(insertUserText, userValues);
	console.log(response);

	const insertTodosText =
		"INSERT INTO todos (title, description, user_id, done) VALUES($1,$2,$3,$4) RETURNING id";
	const todoValues = ["Gym", "7-9 GYM", response.rows[0].id, false];
	await client.query(insertTodosText, todoValues);

	console.log("Entries created!");
}

createEntries();
