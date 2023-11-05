import express from "express";
import { dbConnect } from "./db/db.connect.js";

const app = express();
dbConnect();
const PORT = process.env["PORT"] || 3002;

app.get("/", (req, res) => {
  res.send(
    "classmate plus server is started. This is default route, please check your api route"
  );
});
app.listen(PORT, () => {
  console.log(
    `classmate plus backend server running at: http://localhost:${PORT}`
  );
});
