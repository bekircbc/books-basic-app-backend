import express from "express";
import cors from "cors";

import { books } from "./data/techBook.js";

const app = express();
app.use(cors());

const PORT = process.env.PORT || 4433;

app.get("/", (req, res) => {
  return res.json(books);
});
app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
