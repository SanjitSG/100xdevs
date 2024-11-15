"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const client = new pg_1.Client({
    user: "postgres",
    password: "mysecretpassword",
    host: "localhost",
    port: 5432,
    database: "postgres",
});
function insertUserAndAddress(username, email, password, city, country, street, pincode) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            yield client.query("BEGIN");
            // insert user query
            const insertUser = `
                  INSERT INTO users(username, email, password)
                  values($1,$2, $3) 
                  RETURNING id;`;
            const userRes = yield client.query(insertUser, [username, email, password]);
            console.log("userRes ", userRes);
            const user_id = userRes.rows[0].id;
            // inserting address
            const insertAddressText = `
            INSERT INTO address (user_id, city, country, street, pincode)
            VALUES ($1, $2, $3, $4, $5);
        `;
            yield client.query(insertAddressText, [
                user_id,
                city,
                country,
                street,
                pincode,
            ]);
            yield client.query("COMMIT");
            console.log("User and address inserted successfully");
        }
        catch (error) {
            yield client.query("ROLLBACK");
            console.error(error);
            throw error;
        }
        finally {
            yield client.end();
        }
    });
}
insertUserAndAddress("pandu mama", "pandu.doe@example.com", "securepassword123", "Bihar York", "IN", "123 Broadway Mirzapur", "10001");
