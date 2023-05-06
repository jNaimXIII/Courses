import path from "path";
import express from "express";
import cors from "cors";
import morgan from "morgan";

import { router } from "./routes/router.js";

const app = express();

const port = 42069;
app.listen(port, () => {
  console.log("listening on port", port);
});

app.use(globalMiddleware);

app.use(morgan("dev"));

app.use(cors());

app.use(express.static(path.resolve("public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

function globalMiddleware(_, __, next) {
  console.count("global middleware");
  next();
}
