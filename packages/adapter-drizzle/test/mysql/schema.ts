import { mysqlTable } from "drizzle-orm/mysql-core"
import { drizzle } from "drizzle-orm/mysql2"
import { createPool } from "mysql2"
import { createTables } from "../../src/lib/mysql"

const poolConnection = createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "next-auth",
})

export const { users, accounts, sessions, verificationTokens, authenticators } =
  createTables(mysqlTable)
export const schema = { users, accounts, sessions, verificationTokens, authenticators }

export const db = drizzle(poolConnection, { schema, mode: "default" })
