import { Pool } from "pg";

let conn: Pool | null = null

if (!conn) {
    conn = new Pool({
        user: process.env.PGSQL_USER,
        password: process.env.PGSQL_PASS,
        host: process.env.PGSQL_HOST,
        port: Number(process.env.PGSQL_PORT),
        database: process.env.PGSQL_DB
    })
}

export default conn;