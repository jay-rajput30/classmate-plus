import mongoose, { Schema, model } from "mongoose";

const studentSchema = Schema(
  {
    name: { stype: String },
    age: { type: Number },
    gender: { type: String, enum: ["male", "female"], default: "male" },
    grade: { type: String, enum: ["a", "b", "c", "d", "e", "f"] },
    attendance: { type: Number },
    marks: { type: Number },
  },
  { timestamps: true }
);

const Student = model("Student", studentSchema);

export default Student;
