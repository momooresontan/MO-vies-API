const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please enter a user name"],
      unique: [true, "Username already taken"],
    },
    email: {
      type: String,
      required: [true, "Please enter user email address"],
      unique: [true, "Email address already taken."],
      lowercase: true,
      validate: [validator.isEmail, "User email invalid"],
    },
    password: {
      type: String,
      required: [true, "Please enter user password"],
      minlength: [8, "Password must be at least 8 characters long"],
    },
    roles: {
      type: String,
      default: "user",
    },
    active: {
      type: Boolean,
      default: true,
      select: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
