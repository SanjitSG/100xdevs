import { Client } from "pg";

const client = new Client({
	user: "postgres",
	password: "mysecretpassword",
	host: "localhost",
	port: 5432,
	database: "postgres",
});

async function insertUserAndAddress(
	username: string,
	email: string,
	password: string,
	city: string,
	country: string,
	street: string,
	pincode: string,
) {
	try {
		await client.connect();
		await client.query("BEGIN");

		// insert user query
		const insertUser = `
                  INSERT INTO users(username, email, password)
                  values($1,$2, $3) 
                  RETURNING id;`;
		const userRes = await client.query(insertUser, [username, email, password]);
		console.log("userRes ", userRes);

		const user_id = userRes.rows[0].id;

		// inserting address
		const insertAddressText = `
            INSERT INTO address (user_id, city, country, street, pincode)
            VALUES ($1, $2, $3, $4, $5);
        `;
		await client.query(insertAddressText, [
			user_id,
			city,
			country,
			street,
			pincode,
		]);

		await client.query("COMMIT");
		console.log("User and address inserted successfully");
	} catch (error) {
		await client.query("ROLLBACK");
		console.error(error);
		throw error;
	} finally {
		await client.end();
	}
}

insertUserAndAddress(
	"pandu mama",
	"pandu.doe@example.com",
	"securepassword123",
	"Bihar York",
	"IN",
	"123 Broadway Mirzapur",
	"10001",
);
