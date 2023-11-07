import express from "express";
import {
  addNewTeacher,
  deleteSingleTeacher,
  getAllTeacher,
  updateSingleTeacher,
} from "../controllers/teacher.controller";

const teacherRouter = express.Router();

//get all teachers
teacherRouter.get("/", async (req, res) => {
  try {
    const { data, success, error } = await getAllTeacher();
    if (success) {
      res.status(200).send({ success, data, error });
    } else {
      res.status(400).json({ success, data, error });
    }
  } catch (e) {
    res.status(400).json({ success, data, error: e.message });
  }
});

//add new teacher
teacherRouter.post("/", async (req, res) => {
  try {
    const studentData = req.body;
    const { data, success, error } = await addNewTeacher(studentData);
    if (success) {
      res.status(200).send({ success, data, error });
    } else {
      res.status(400).json({ success, data, error });
    }
  } catch (e) {
    res.status(400).json({ success, data, error: e.message });
  }
});

//update teacher
teacherRouter.post("/:teacherId", async (req, res) => {
  try {
    const teacherId = req.params.teacherId;
    const teacherData = req.body;
    const { data, success, error } = await updateSingleTeacher(
      teacherId,
      teacherData
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

//delete teacher
teacherRouter.delete("/:teacherId", async (req, res) => {
  try {
    const teacherId = req.params.teacherId;
    const { data, success, error } = await deleteSingleTeacher(studentId);
    if (success) {
      res.status(200).send({ success, data, error });
    } else {
      res.status(400).json({ success, data, error });
    }
  } catch (e) {
    res.status(400).json({ success, data, error: e.message });
  }
});

export default teacherRouter;
