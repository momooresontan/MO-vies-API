const express = require("express");

const router = express.Router();

router.post("/register", async (req, res) => {
  res.status(201).json({ message: "Register user" });
});

router.post("/login", async (req, res) => {
  res.status(201).json({ message: "Login user" });
});

router.get("/me", async (req, res) => {
  res.status(200).json({ message: "Get current user" });
});
