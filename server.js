import express from "express";
import cors from "cors";
import axios from "axios";

import { books } from "./data/techBook.js";
import { nouns } from "./data/germanNouns.js";

const app = express();
app.use(cors());

const PORT = 4433;

//books get, post,patch,delete, put, patch

/////////////////////////////////////////////////7

app.get("/", (req, res) => {
  res.send(
    `<h1>Basic Backend Page</h1>
    <nav>
    <a href="http://localhost:${PORT}/about">About</a> 
    <a href="http://localhost:${PORT}/books">Books</a>
    <a href="http://localhost:${PORT}/nouns">Nouns</a>
    <a href="http://localhost:${PORT}/employees">Employees</a>
    <a href="http://localhost:${PORT}/text">Text</a>
    </nav>
    `
  );
});

app.get("/about", (req, res) => {
  res.send(
    `<h1>About</h1>
<p>     This page is created for custom hooks, Node/Express Server. In the
future can be a Library for tools and custom hooks in React.</p>>
    `
  );
});

app.get("/books", (req, res) => {
  return res.json(books);
});

app.get("/books/:id", (req, res) => {
  console.log(req.params.id);
  const book = books.find((book) => {
    return book.id === Number(req.params.id);
  });
  return res.json(book);
});

app.post("/books", (req, res) => {
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

app.patch("books/:id", (req, res) => {
  const index = books.findIndex((book) => {
    book.id === Number(req.params.id);
  });
  books[index] = { ...books[index], ...req.body };
  res.send("Got a PATCH request at /user");
});

app.put("/books/:id", (req, res) => {
  res.send("Got a PUT request at /user");
});

app.delete("/books/:id", (req, res) => {
  res.send("Got a DELETE request at /user");
});

/////////////////////////////////////////////////////////////////////////

//Node/Express server that serves HTML text

///////////////////////////////////////////

app.get("/text", (req, res) => {
  res.send("welcome to this <b>website</b>");
});

//////////////////////////////////////////

//Employes Database

const employees = (
  await axios.get("https://edwardtanguay.netlify.app/share/employees.json")
).data;

app.get("/employees", (req, res) => {
  res.send(employees);
});

//Node/Express server that serves dynamic HTML

///////////////////////////////////////////

//for getting data from internet..

// const nouns = (
//   await axios.get("https://edwardtanguay.netlify.app/share/germanNouns.json")
// ).data;

//Dynamic Html als string in page.. must be solved..

// app.get("/nouns", (req, res) => {
//   res.send(
//     `<ul>${nouns
//       .map((m) => `<li key=${m.id}>${m.article} ${m.singular}</li>`)
//       .join("")}</ul>`
//   );
// });

app.get("/nouns", (req, res) => {
  res.send(nouns);
});

//////////////////////////////////////////

//CSS file

// app.get("/maincss", (req.res) => {
//   res.send(`h1{
//   color:blue;}`);
// })

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
