import mongoose, { Schema, model } from "mongoose";

const teacherSchema = Schema(
  {
    name: { type: String },
    subject: { type: String },
    contact: { type: String },
  },
  { timestamps: true }
);

const Teacher = model("Teacher", teacherSchema);

export default Teacher;
