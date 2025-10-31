import express from "express";
import db from "../lib/db.js";

const router = express.Router();

router.get("/", (req, res) => {
  const todos = db.prepare("SELECT * FROM todos").all();
  res.json(todos);
});

router.get("/:id", (req, res) => {
  const todo = db
    .prepare("SELECT * FROM todos WHERE id = ?")
    .get(req.params.id);
  if (!todo) return res.status(404).json({ message: "Todo not found" });
  res.json(todo);
});

router.post("/", (req, res) => {
  const { title, done = 0 } = req.body;
  if (!title) return res.status(400).json({ message: "Title is required" });

  const stmt = db.prepare("INSERT INTO todos (title, done) VALUES (?, ?)");
  const result = stmt.run(title, done ? 1 : 0);

  res.status(201).json({ id: result.lastInsertRowid, title, done });
});

router.put("/:id", (req, res) => {
  const { title, done } = req.body;
  const stmt = db.prepare(`
    UPDATE todos
    SET title = COALESCE(?, title),
        done = COALESCE(?, done)
    WHERE id = ?
  `);
  const result = stmt.run(title, done, req.params.id);
  if (result.changes === 0)
    return res.status(404).json({ message: "Todo not found" });
  res.json({ message: "Todo updated" });
});

router.delete("/:id", (req, res) => {
  const stmt = db.prepare("DELETE FROM todos WHERE id = ?");
  const result = stmt.run(req.params.id);
  if (result.changes === 0)
    return res.status(404).json({ message: "Todo not found" });
  res.json({ message: "Todo deleted" });
});

export default router;
