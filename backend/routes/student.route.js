import express from "express";
import {
  addNewStudent,
  deleteSingleStudent,
  getAllStudents,
  updateSingleStudent,
} from "../controllers/student.controller";

const studentRouter = express.Router();

//get all students
studentRouter.get("/", async (req, res) => {
  try {
    const { data, success, error } = await getAllStudents();
    if (success) {
      res.status(200).send({ success, data, error });
    } else {
      res.status(400).json({ success, data, error });
    }
  } catch (e) {
    res.status(400).json({ success, data, error: e.message });
  }
});

//add new student
studentRouter.post("/", async (req, res) => {
  try {
    const studentData = req.body;
    const { data, success, error } = await addNewStudent(studentData);
    if (success) {
      res.status(200).send({ success, data, error });
    } else {
      res.status(400).json({ success, data, error });
    }
  } catch (e) {
    res.status(400).json({ success, data, error: e.message });
  }
});

//update student
studentRouter.post("/:studentId", async (req, res) => {
  try {
    const studentId = req.params.studentId;
    const studentData = req.body;
    const { data, success, error } = await updateSingleStudent(
      studentId,
      studentData
    );
    if (success) {
      res.status(200).send({ success, data, error });
    } else {
      res.status(400).json({ success, data, error });
    }
  } catch (e) {
    res.status(400).json({ success, data, error: e.message });
  }
});

//delete student
studentRouter.delete("/", async (req, res) => {
  try {
    const studentId = req.params.studentId;
    const { data, success, error } = await deleteSingleStudent(studentId);
    if (success) {
      res.status(200).send({ success, data, error });
    } else {
      res.status(400).json({ success, data, error });
    }
  } catch (e) {
    res.status(400).json({ success, data, error: e.message });
  }
});

export default Router;
