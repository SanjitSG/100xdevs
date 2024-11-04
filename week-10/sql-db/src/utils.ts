// giver postgress client on which you can call postrges functions on which you can actually call functions to interact with db
require("dotenv").config();

import { Client } from "pg";

export async function getClient() {
	const client = new Client(process.env.DB_URL);
	await client.connect();
	return client;
}
