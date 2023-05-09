import express from "express";
import { v4 as UUIDv4 } from "uuid";
import { getDb, setDb } from "../db.js";
import { error } from "../helpers/error.js";

const router = express.Router();

router.post("/", (req, _, next) => {
  const { multiple } = req.body;

  if (multiple) {
    const { tickets } = req.body;
    for (const ticket of tickets) {
      if (!isValidTicketBody(ticket)) {
        throw new Error(error("missing fields", 400));
      }
    }
  } else {
    if (!isValidTicketBody(req.body)) {
      throw new Error(error("missing fields", 400));
    }
  }

  next();
});

router.post("/", (req, res) => {
  const { multiple } = req.body;

  const db = getDb();

  if (multiple) {
    const tickets = req.body.tickets.map(createTicket);

    db.tickets = db.tickets.concat(tickets);

    res.json({ message: "success", tickets });
  } else {
    const ticket = createTicket(req.body);

    db.tickets.push(ticket);

    res.json({ message: "success", ticket });
  }

  setDb(db);
});

router.get("/", (req, res) => {
  const { username } = req.query;

  const db = getDb();

  if (username) {
    const tickets = db.tickets.filter((t) => t.username === username);

    if (!tickets.length) {
      throw new Error(error("tickets not found", 404));
    }

    res.json({ message: "success", tickets });
  } else {
    res.json({ message: "success", tickets: db.tickets });
  }
});

router.get("/:id", (req, res) => {
  const db = getDb();
  const { id } = req.params;

  const ticket = db.tickets.filter((t) => t.id === id);

  if (!ticket.length) {
    throw new Error(error("ticket not found", 404));
  }

  res.json({ message: "success", ticket: ticket[0] });
});

router.patch("/", (req, res) => {
  const { updateBy } = req.body;

  const db = getDb();

  if (updateBy === "username") {
    const { username, prize } = req.body;

    const updatedTickets = [];

    db.tickets = db.tickets.map((ticket) => {
      if (ticket.username !== username) return ticket;

      const updated = {
        ...ticket,
        prize,
        updatedAt: Date.now(),
      };

      updatedTickets.push(updated);

      return updated;
    });

    if (!updatedTickets.length) {
      throw new Error(error("tickets not found", 404));
    }

    res.json({ message: "success", tickets: updatedTickets });
  }

  setDb(db);
});

router.patch("/:id", (req, res) => {
  const db = getDb();

  const { id } = req.params;
  const { prize } = req.body;

  let updatedTicket;

  db.tickets = db.tickets.map((ticket) => {
    if (ticket.id !== id) return ticket;

    const updated = {
      ...ticket,
      prize,
      updatedAt: Date.now(),
    };

    updatedTicket = updated;

    return updated;
  });

  if (!updatedTicket) {
    throw new Error(error("ticket not found", 404));
  }

  res.json({ message: "success", ticket: updatedTicket });

  setDb(db);
});

router.delete("/", (req, res) => {
  const { username } = req.body;

  const db = getDb();

  if (username) {
    db.tickets = db.tickets.filter((ticket) => ticket.username !== username);
  }

  setDb(db);

  res.json({ message: "success" });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  const db = getDb();

  db.tickets = db.tickets.filter((ticket) => ticket.id !== id);

  setDb(db);

  res.json({ message: "success" });
});

export default router;

function createTicket(data) {
  const { username, prize } = data;

  const id = UUIDv4();
  const createdAt = Date.now();
  const updatedAt = createdAt;

  return {
    id,
    username,
    prize,
    createdAt,
    updatedAt,
  };
}

function isValidTicketBody(ticket) {
  const { username, prize } = ticket;

  return username && prize;
}
