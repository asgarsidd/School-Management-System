const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const adminModel = require("./adminModel.js");
const teacherModel = require("./teacherModel.js");
const studentModel = require("./studentModel.js");

const userSchema = new Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["admin", "teacher", "student"],
      required: true,
    },
    userDetails: { type: Schema.Types.Mixed },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", function (next) {
  if (this.role === "student") {
    this.userDetails = new StudentProfile(this.userDetails);
  } else if (this.role === "teacher") {
    this.userDetails = new TeacherProfile(this.userDetails);
  } else if (this.role === "admin") {
    this.userDetails = new adminModel(this.userDetails);
  }

  next();
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};


userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      username: this.username,
      fullName: this.fullName,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
};

const User = mongoose.model("User", userSchema);
module.exports = User;
