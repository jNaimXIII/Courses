import express from "express";
import { getDb, setDb } from "../db.js";
import { error } from "../helpers/error.js";

const router = express.Router();

router.get("/", (_, res) => {
  const db = getDb();

  if (!db.tickets.length) {
    throw new Error(error("no tickets left", 404));
  }

  const random = db.tickets[Math.floor(Math.random() * db.tickets.length)];

  db.tickets = db.tickets.filter((ticket) => ticket !== random);

  setDb(db);

  res.json({ message: "success", ticket: random });
});

export default router;
