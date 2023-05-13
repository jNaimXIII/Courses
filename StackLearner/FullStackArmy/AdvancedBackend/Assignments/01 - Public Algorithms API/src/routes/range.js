import express from "express";
import { randomInt } from "../lib/randomInt.js";
import { rangeSchema } from "../schemas/range.js";

const router = express.Router();

router.get("/", (req, res) => {
  const { value, error } = rangeSchema.validate(req.query);

  if (error) throw { status: 400, error };

  const random = randomInt(value.min, value.max);

  res.json({ random });
});

export default router;
