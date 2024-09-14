const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
  name: { type: String, required: true },        // Teacher's name
  gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },  // Gender of the teacher
  dob: { type: Date, required: true },           // Date of birth
  contact: { type: String, required: true },     // Contact number
  salary: { type: Number, required: true },      // Teacher's salary
  assignedClasses: [                             // Array of assigned class IDs
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Class'
    }
  ],
});

module.exports = mongoose.model('Teacher', teacherSchema);
