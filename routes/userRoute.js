const express = require("express");
const validateToken = require("../middlewares/validateTokenHandler");
const {
  registerUser,
  loginUser,
  getMe,
} = require("../controllers/userController");

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/me", validateToken, getMe);

module.exports = router;
