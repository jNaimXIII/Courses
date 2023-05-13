const express = require("express");

const app = express();

app.listen(42069, () => {
  console.log("listening on port 42069");
});

app.use(express.json());

const books = [
  {
    id: 1,
    name: "Eloquent JavaScript",
    price: 100,
  },
  {
    id: 2,
    name: "The C Programming Language",
    price: 200,
  },
  {
    id: 3,
    name: "The Pragmatic Programmer",
    price: 300,
  },
  {
    id: 4,
    name: "Introduction to Algorithms",
    price: 400,
  },
];

app.get("/books", (req, res) => {
  let result = [];

  if (req.query.price === "100") {
    result = books.filter((book) => book.price <= 100);
  } else if (req.query.price === "200") {
    result = books.filter((book) => book.price <= 200);
  } else if (req.query.price === "300") {
    result = books.filter((book) => book.price <= 300);
  } else if (req.query.price === "400") {
    result = books.filter((book) => book.price <= 400);
  } else {
    result = books;
  }

  return res.json(result);
});

// const http = require("http");
//
// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.write("<h1>Soup!</h1>");
//     res.statusCode = 200;
//     res.end();
//   } else if (req.url === "/health") {
//     res.write("<h1>OK</h1>");
//     res.statusCode = 200;
//     res.end();
//   } else {
//     res.write("<h1>404 Not Found</h1>");
//     res.statusCode = 404;
//     res.end();
//   }
// });
//
// server.listen(42069, () => {
//   console.log("listening on port 42069");
// });
