const mongoose = require("mongoose");
require("dotenv").config();
const connectDB = async () => {
  try {
    // console.log(process.env.mongoDB_URL)
    await mongoose.connect(process.env.mongoDB_URL);
    console.log("MongoDB Connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
