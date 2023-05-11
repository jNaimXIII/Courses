import express from "express";
import { fakeUser } from "../lib/fakeUser.js";
import { fakeSchema } from "../schemas/fake.js";

const router = express.Router();

router.get("/", (req, res) => {
  let { fields = "" } = req.query;

  fields = fields
    .split(",")
    .map((s) => s.trim())
    .map(Boolean);

  const { value, error } = fakeSchema.validate({ fields });

  if (error) throw { status: 400, error };

  const user = fakeUser(value.fields);

  res.json(user);
});

export default router;
