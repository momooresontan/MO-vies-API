const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

exports.registerUser = asyncHandler(async (req, res) => {
  const { username, email, password, passwordConfirm } = req.body;
  if (!username || !email || password || passwordConfirm)
    res.status(201).json({ message: "Register user" });
});

exports.loginUser = asyncHandler(async (req, res) => {
  res.status(201).json({ message: "Login user" });
});

exports.getMe = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get current user" });
});
