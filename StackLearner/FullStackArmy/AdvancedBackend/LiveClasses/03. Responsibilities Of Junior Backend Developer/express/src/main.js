import express from "express";
import { fibonacci } from "./lib/fibonacci.js";

const app = express();

app.get("", (req, res) => {
  const { func = "fibonacci", n = 40 } = req.query;

  if (func === "fibonacci") {
    const result = fibonacci(n);
    res.json({ result });
  }
});

app.listen(42069, () => console.log("listening..."));
