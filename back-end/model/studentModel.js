const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema(
  {
    name: { type: String, required: true },
    gender: { type: String, required: true },
    dob: { type: Date, required: true },
    contactDetails: { type: String, required: true },
    feesPaid: { type: Number, required: true },
    class: { type: Schema.Types.ObjectId, ref: "Class" },
  },
  {
    timestamps: true,
  }
);

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
