import express from "express";
import cors from "cors";
import morgan from "morgan";

import HealthRouter from "./routes/health.js";
import RangeRouter from "./routes/range.js";
import UserRoute from "./routes/user.js";
import CountRoute from "./routes/count.js";

const app = express();

app.use(cors());
app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/health", HealthRouter);
app.use("/range", RangeRouter);
app.use("/user", UserRoute);
app.use("/count", CountRoute);

const PORT = 42069;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));

app.use((err, _, res, next) => {
  console.error(err);

  if (err.status) {
    return res.status(err.status).json(err.error);
  }

  res.status(500).json({ message: "something wen't wrong" });

  next();
});
