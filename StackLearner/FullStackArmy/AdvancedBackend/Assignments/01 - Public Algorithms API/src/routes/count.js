import express from "express";
import { countSchema } from "../schemas/count.js";
import { charCount } from "../lib/charCount.js";

const router = express.Router();

router.get("/", (req, res) => {
  const { value, error } = countSchema.validate(req.query.string);

  if (error) throw { status: 400, error };

  const counts = charCount(value);

  res.json(counts);
});

export default router;
