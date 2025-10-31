import Database from "better-sqlite3";
import path from "path";

const dbPath = path.resolve("src/data/todos.db");

const db = new Database(dbPath);

db.exec(`
  CREATE TABLE IF NOT EXISTS todos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    done INTEGER DEFAULT 0
  )
`);

console.log("✅ Connected to SQLite database (better-sqlite3)");

export default db;
