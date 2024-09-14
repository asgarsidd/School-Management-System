const express = require('express');
const router = express.Router();
const Class = require('../models/Class');
const auth = require('../middleware/authMiddleware');

// @route    POST /api/classes
// @desc     Create a class
// @access   Private (Admin only)
router.post('/', auth, async (req, res) => {
  const { name, year, teacher, studentFees } = req.body;
  
  try {
    const newClass = new Class({
      name,
      year,
      teacher,
      studentFees,
    });
    await newClass.save();
    res.json(newClass);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET /api/classes
// @desc     Get all classes
// @access   Private
router.get('/', auth, async (req, res) => {
  try {
    const classes = await Class.find().populate('teacher').populate('studentList');
    res.json(classes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    PUT /api/classes/:id
// @desc     Update a class
// @access   Private (Admin only)
router.put('/:id', auth, async (req, res) => {
  const { name, year, teacher, studentFees } = req.body;
  
  try {
    let classItem = await Class.findById(req.params.id);
    if (!classItem) return res.status(404).json({ msg: 'Class not found' });
    
    classItem.name = name || classItem.name;
    classItem.year = year || classItem.year;
    classItem.teacher = teacher || classItem.teacher;
    classItem.studentFees = studentFees || classItem.studentFees;
    
    await classItem.save();
    res.json(classItem);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    DELETE /api/classes/:id
// @desc     Delete a class
// @access   Private (Admin only)
router.delete('/:id', auth, async (req, res) => {
  try {
    const classItem = await Class.findById(req.params.id);
    if (!classItem) return res.status(404).json({ msg: 'Class not found' });

    await classItem.remove();
    res.json({ msg: 'Class removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
