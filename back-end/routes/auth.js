const express = require("express");
const authRoute = express.Router();
const User = require("../model/user");
const { userLogin, userRegister } = require("../controllers/userControllers");

authRoute.post("/auth", userLogin);
authRoute.post("/auth", userRegister);
