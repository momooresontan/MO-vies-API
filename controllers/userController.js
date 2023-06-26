const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");

exports.registerUser = asyncHandler(async (req, res) => {
  const { username, email, password, passwordConfirm } = req.body;
  if (!username || !email || !password || !passwordConfirm) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("User already created");
  }

  //Hash password
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log(hashedPassword);
  passwordConfirm = undefined;
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
    passwordConfirm: undefinded,
  });

  res.status(201).json({ message: "Register user" });
});

exports.loginUser = asyncHandler(async (req, res) => {
  res.status(201).json({ message: "Login user" });
});

exports.getMe = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get current user" });
});
