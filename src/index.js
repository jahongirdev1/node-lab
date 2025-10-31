import express from "express";
import dotenv from "dotenv";
import todosRouter from "./routes/todos.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/todos", todosRouter);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
