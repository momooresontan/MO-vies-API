const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Get all reviews" });
});
router.post("/", (req, res) => {
  res.status(200).json({ message: "Create a review" });
});
router.get("/:id", (req, res) => {
  res.status(200).json({ message: "Get review by id" });
});
router.patch("/:id", (req, res) => {
  res.status(200).json({ message: "Update review by id" });
});
router.delete("/:id", (req, res) => {
  res.status(200).json({ message: "Delete review by id" });
});

module.exports = router;
