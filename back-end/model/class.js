const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const classSchema = new Schema(
  {
    className: { type: String, required: true },
    year: { type: Number, required: true },
    teacher: { type: Schema.Types.ObjectId, ref: "Teacher", required: true },
    studentFees: { type: Number, required: true },
    studentList: [{ type: Schema.Types.ObjectId, ref: "Student" }],
    maxStudents: { type: Number, default: 30 },
  },
  {
    timestamps: true,
  }
);

const Class = mongoose.model("Class", classSchema);
module.exports = Class;
