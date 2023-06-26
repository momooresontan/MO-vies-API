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
      select: false,
    },
    passwordConfirm: {
      type: String,
      required: [true, "Please confirm user password"],
      validate: {
        // This only works on CREATE or SAVE!!
        validator: function (val) {
          return val === this.password;
        },
        message: "Passwords do not match!",
      },
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
