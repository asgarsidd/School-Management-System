const express = require('express');
const router = express.Router();
const Teacher = require('../models/Teacher');
const auth = require('../middleware/authMiddleware');

// @route    POST /api/teachers
// @desc     Add a teacher
// @access   Private (Admin only)
router.post('/', auth, async (req, res) => {
  const { name, gender, dob, contactDetails, salary, assignedClass } = req.body;
  
  try {
    const newTeacher = new Teacher({
      name,
      gender,
      dob,
      contactDetails,
      salary,
      assignedClass
    });
    await newTeacher.save();
    res.json(newTeacher);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET /api/teachers
// @desc     Get all teachers
// @access   Private
router.get('/', auth, async (req, res) => {
  try {
    const teachers = await Teacher.find().populate('assignedClass');
    res.json(teachers);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    PUT /api/teachers/:id
// @desc     Update a teacher
// @access   Private (Admin only)
router.put('/:id', auth, async (req, res) => {
  const { name, gender, dob, contactDetails, salary, assignedClass } = req.body;
  
  try {
    let teacher = await Teacher.findById(req.params.id);
    if (!teacher) return res.status(404).json({ msg: 'Teacher not found' });
    
    teacher.name = name || teacher.name;
    teacher.gender = gender || teacher.gender;
    teacher.dob = dob || teacher.dob;
    teacher.contactDetails = contactDetails || teacher.contactDetails;
    teacher.salary = salary || teacher.salary;
    teacher.assignedClass = assignedClass || teacher.assignedClass;
    
    await teacher.save();
    res.json(teacher);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    DELETE /api/teachers/:id
// @desc     Delete a teacher
// @access   Private (Admin only)
router.delete('/:id', auth, async (req, res) => {
  try {
    const teacher = await Teacher.findById(req.params.id);
    if (!teacher) return res.status(404).json({ msg: 'Teacher not found' });

    await teacher.remove();
    res.json({ msg: 'Teacher removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
