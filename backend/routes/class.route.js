import express from "express";
import {
  addNewClass,
  addStudentToClass,
  getClassDetails,
  removeStudentFromClass,
} from "../controllers/class.controller.js";

const classRouter = express.Router();

classRouter.get("/:classId", async (req, res) => {
  try {
    const classId = req.params.classId;
    const { data, success, error } = await getClassDetails(classId);
    if (success) {
      res.status(200).send({ success, data, error });
    } else {
      res.status(400).json({ success, data, error });
    }
  } catch (e) {
    res.status(400).json({ success, data, error: e.message });
  }
});

classRouter.post("/", async (req, res) => {
  try {
    const classData = req.body;
    const { data, success, error } = await addNewClass(classData);
    if (success) {
      res.status(200).send({ success, data, error });
    } else {
      res.status(400).json({ success, data, error });
    }
  } catch (e) {
    res.status(400).json({ success, data, error: e.message });
  }
});

classRouter.post("/:classId", async (req, res) => {
  try {
    const classId = req.params.classId;
    const studentId = req.body;
    const { data, success, error } = await addStudentToClass(
      classId,
      studentId
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

classRouter.delete("/:classId", async (req, res) => {
  try {
    const classId = req.params.classId;
    const studentId = req.body;
    const { data, success, error } = await removeStudentFromClass(
      classId,
      studentId
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

export default classRouter;
