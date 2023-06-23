const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
  res.status(200).json({ message: "Get all movies" });
});
router.post("/", async (req, res) => {
  res.status(200).json({ message: "Add a movie" });
});
router.get("/:id", async (req, res) => {
  res.status(200).json({ message: "Get movie by id" });
});
router.put("/:id", async (req, res) => {
  res.status(200).json({ message: "Update movie" });
});
router.delete("/:id", async (req, res) => {
  res.status(200).json({ message: "Delete movie" });
});

module.exports = router;
