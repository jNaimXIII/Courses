import fs from "fs";
import path from "path";

export const DB_PATH = path.resolve("src", "data", "db.json");

export function getDb() {
  return JSON.parse(fs.readFileSync(DB_PATH));
}

export function setDb(db) {
  fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2));
}
