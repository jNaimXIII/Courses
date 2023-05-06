import fs from "fs";
import path from "path";
import express from "express";

export const router = express.Router();

router.get("/", (_, res) => {
  fs.readFile(path.resolve("src", "pages", "index.html"), (err, data) => {
    if (err) {
      console.log(err);
      res.send("Something went wrong.");
      return;
    }

    res.write(data);
    res.end();
  });
});

router.get("/about", localMiddleware, (_, res) => {
  res.send("About");
});

router.get("/help", (_, res) => {
  res.send("Help");
});

function localMiddleware(_, __, next) {
  console.count("local middleware");
  next();
}
