const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const User = require("../models/userModel");

dotenv.config();

//@desc Register a user
//@route POST /api/users/register
//@public

exports.registerUser = asyncHandler(async (req, res) => {
  const { username, email, password, role } = req.body;
  if (!username || !email || !password) {
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
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
    role,
  });
  console.log(`User created ${user}`);
  if (user) {
    res.status(201).json({
      _id: user.id,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("User data invalid!");
  }
});

//@desc Login user
//@route POST /api/users/login
//@public

exports.loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }
  const user = await User.findOne({ email });

  //compare password with hashedPassword
  const passwordCompare = await bcrypt.compare(password, user.password);
  if (user && passwordCompare) {
    const accessToken = jwt.sign(
      {
        user: {
          username: user.username,
          email: user.email,
          role: user.role,
          id: user.id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN }
    );
    res.status(200).json({ accessToken });
  } else {
    res.status(401);
    throw new Error("Email or password invalid");
  }
});

//@desc Current user
//@route GET /api/users/me
//@private

exports.getMe = asyncHandler(async (req, res) => {
  const { user } = req;
  res.status(200).json(user);
});
