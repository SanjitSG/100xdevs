import { Client } from "pg";

const client = new Client({
	connectionString:
		"postgresql://postgres:mysecretpassword@localhost:5432/postgres",
});

async function createTables() {
	try {
		await client.connect();

		await client.query("BEGIN");

		// Create the `users` table
		await client.query(`
      CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) NOT NULL UNIQUE,
        email VARCHAR(255) UNIQUE NOT NULL,
        password TEXT NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `);

		// Create the `address` table
		await client.query(`
      CREATE TABLE address (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        city VARCHAR(100) NOT NULL,
        country VARCHAR(100) NOT NULL,
        street VARCHAR(255) NOT NULL,
        pincode VARCHAR(20),
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `);

		await client.query("COMMIT");

		console.log("Tables created successfully");
	} catch (error) {
		console.error("Error creating tables:", error);
		await client.query("ROLLBACK"); // Rollback the transaction on error
	} finally {
		await client.end();
	}
}

createTables();
