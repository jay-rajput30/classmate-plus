import mongoose, { Schema, model } from "mongoose";

const classSchema = Schema(
  {
    standard: { type: String },
    division: { type: String },
    students: [{ type: Schema.Types.ObjectId, ref: "Student" }],
  },
  { timestamps: true }
);

const Class = model("Class", classSchema);

export default Class;
