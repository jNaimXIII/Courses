import express from "express";
import cors from "cors";
import morgan from "morgan";

import DrawRoute from "./routes/draw.js";
import TicketsRoute from "./routes/tickets.js";
import { parseError } from "./helpers/error.js";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(42069, () => {
  console.log("listening on port 42069");
});

app.use("/draw", DrawRoute);
app.use("/tickets", TicketsRoute);

app.get("/health", (_, res) => {
  res.json({ status: "OK" });
});

app.use((err, _, res, __) => {
  const { status = 500, message = "something wen't wrong" } = parseError(
    err.message
  );

  res.status(status || 500).json({
    status,
    message,
  });
});
