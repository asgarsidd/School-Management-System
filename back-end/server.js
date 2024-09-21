const express = require("express");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth");
// const classRoutes = require("./routes/classRoutes");
// const teacherRoutes = require("./routes/teacheRouts");
// Initialize the Express app
const app = express();

// Load environment variables
dotenv.config();

// Connect to the database
const connectDB = require("./db");
// Init Middleware for JSON parsing
app.use(express.json());

// Define routes
app.get("/", (req, res) => res.send("API Running"));
// app.use("/api/auth", authRoutes);
// app.use("/api/classes", classRoutes);
// app.use("/api/teachers", teacherRoutes);

// Serve the application on the port
const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  try {
    await connectDB();
    console.log(`Server running on port http://localhost:${PORT}`);
  } catch (err) {
    console.log(err);
  }
});
