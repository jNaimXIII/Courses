const fs = require("fs");
const path = require("path");

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const shortid = require("shortid");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

const DB_PATH = path.resolve("src", "db.json");
function getDb() {
  return JSON.parse(fs.readFileSync(DB_PATH));
}
function saveDb(db) {
  fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2));
}

app.get("/players/:id", (req, res) => {
  const db = getDb();

  const player = db.players.find((p) => p.id === req.params.id);

  if (!player) {
    res.setHeader("Cache-Control", "public, max-age=300");
    res.status(404).json({ message: "not found" });
  } else {
    res.status(200).json(player);
  }
});

app.put("/players/:id", (req, res) => {
  const db = getDb();

  let player = db.players.find((p) => p.id === req.params.id);

  const { name, country, rank } = req.body;
  if (!player) {
    player = {
      id: shortid.generate(),
      name,
      country,
      rank,
    };

    db.players.push(player);
  } else {
    player.name = name;
    player.country = country;
    player.rank = rank;
  }

  saveDb(db);

  res.status(203).json(player);
});

app.patch("/players/:id", (req, res) => {
  const db = getDb();

  const player = db.players.find((p) => p.id === req.params.id);

  if (!player) {
    res.status(404).json({ message: "not found" });
  } else {
    const { name, country, rank } = req.body;

    player.name = name || player.name;
    player.country = country || player.country;
    player.rank = rank || player.rank;

    saveDb(db);

    res.status(203).json(player);
  }
});

app.delete("/players/:id", (req, res) => {
  const { id } = req.params;

  const db = getDb();

  db.players = db.players.filter((p) => p.id !== id);

  saveDb(db);

  res.status(200).send();
});

app.get("/players", (_, res) => {
  const db = getDb();

  res.setHeader("Cache-Control", "public, max-age=300");
  res.status(200).json(db.players);
});

app.post("/players", (req, res) => {
  const player = {
    ...req.body,
    id: shortid.generate(),
  };

  const db = getDb();

  db.players.push(player);

  saveDb(db);

  res.status(201).json(player);
});

app.get("/health", (_, res) => {
  res.status(200).json({ status: "OK" });
});

const port = process.env.PORT || 42069;
app.listen(port, () => {
  console.log("listening on port", port);
});
