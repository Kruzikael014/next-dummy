import { Pool } from "pg";
import { PGSQL_DB, PGSQL_HOST, PGSQL_PASS, PGSQL_PORT, PGSQL_USER } from "../env";

let conn: Pool | null = null

if (!conn) {
    conn = new Pool({
        user: PGSQL_USER,
        password: PGSQL_PASS,
        host: PGSQL_HOST,
        port: Number(PGSQL_PORT),
        database: PGSQL_DB
    })
}

export default conn;