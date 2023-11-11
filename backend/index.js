import express from "express";
import { dbConnect } from "./db/db.connect.js";
import studentRouter from "./routes/student.route.js";
import teacherRouter from "./routes/teacher.route.js";
import classRouter from "./routes/class.route.js";

const app = express();
dbConnect();
app.use(express.json());
app.use("/student", studentRouter);
app.use("/teacher", teacherRouter);
app.use("/class", classRouter);

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
