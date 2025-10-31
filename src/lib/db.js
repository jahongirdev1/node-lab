import Database from "better-sqlite3";
import path from "path";

const dbPath = path.resolve("src/data/todos.db");
const db = new Database(dbPath);

db.exec(`
  CREATE TABLE IF NOT EXISTS todos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    done INTEGER DEFAULT 0
  );
`);

db.exec(`
  CREATE TABLE IF NOT EXISTS archive_todos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    done INTEGER DEFAULT 0,
    archived_at TEXT DEFAULT CURRENT_TIMESTAMP
  );
`);

console.log("Connected to SQLite database (todos + archive)");

export default db;
