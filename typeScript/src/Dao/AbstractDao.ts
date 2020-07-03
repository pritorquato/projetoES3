import dotenv from "dotenv";
dotenv.config();
import knex from "knex";
import Knex from "knex";

export abstract class AbstractDao{
    getConnection(): Knex{
        return knex({
            client: "mysql",
            connection: {
                host: "127.0.0.1",
                port: Number("3306"|| "3000"),
                user: "esw3",
                password: "1234",
                database: "esw3",
                insecureAuth : true
            }
        })
    }
}