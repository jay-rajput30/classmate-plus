import mongoose, { Schema, model } from "mongoose";

const studentSchema = Schema(
  {
    name: { stype: String, required: true },
    age: { type: Number, required: true },
    gender: {
      type: String,
      enum: ["male", "female"],
      default: "male",
      required: true,
    },
    grade: {
      type: String,
      enum: ["a", "b", "c", "d", "e", "f"],
      required: true,
    },
    attendance: { type: Number, required: true },
    marks: { type: Number, required: true },
  },
  { timestamps: true }
);

const Student = model("Student", studentSchema);

export default Student;
