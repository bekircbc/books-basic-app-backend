import express from "express";
import cors from "cors";

import { books } from "./data/techBook.js";

const app = express();
app.use(cors());

const PORT = process.env.PORT || 4433;

app.get("/", (req, res) => {
  return res.json(books);
});

app.get("/:id", (req, res) => {
  console.log(req.params.id);
  const book = books.find((book) => {
    return book.id === Number(req.params.id);
  });
  return res.json(book);
});

app.post("/", (req, res) => {
  console.log(req.body);
  /* const book = Object.assign({id:books.length+1}, req.body) */
  const maxId = books.reduce((acc, cur) => {
    if (acc.id > cur.id) {
      return acc.id;
    } else {
      return cur.id;
    }
  });
  console.log(maxId);
  const book = Object.assign({ id: books.length + 1 }, req.body);
  book.push(book);
  res.json(book);
});

app.get("/book/:id", (req, res) => {
  const index = books.findIndex((book) => {
    book.id === Number(req.params.id);
  });
  book[index] = { ...books[index], ...req.body };
  res.send("Got a PATCH request at /user");
});

app.put("/book/:id", (req, res) => {
  res.send("Got a PUT request at /user");
});

app.delete("/book/:id", (req, res) => {
  res.send("Got a DELETE request at /user");
});

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
