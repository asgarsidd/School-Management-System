const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const classRoutes = require('./routes/class');
const teacherRoutes = require('./routes/teacher');

// Load environment variables
dotenv.config();

// Initialize the Express app
const app = express();

// Connect to the database
connectDB();

// Init Middleware for JSON parsing
app.use(express.json());

// Define routes
app.use('/api/auth', authRoutes);
app.use('/api/classes', classRoutes);
app.use('/api/teachers', teacherRoutes);

// Serve the application on the port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
