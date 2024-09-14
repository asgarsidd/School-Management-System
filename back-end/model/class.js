const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
  name: { type: String, required: true },      // Class name (e.g., "Class 1")
  year: { type: Number, required: true },      // Year of the class (e.g., 2024)
  teacher: {                                   // Reference to the assigned teacher
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Teacher',
    required: true
  },
  students: [                                  // Array of student IDs in the class
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student'
    }
  ],
  fees: { type: Number, required: true },      // Fees for the class
  maxStudents: { type: Number, default: 30 },  // Maximum number of students allowed in the class
});

module.exports = mongoose.model('Class', classSchema);
