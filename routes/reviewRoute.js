const express = require("express");
const { validateToken } = require("../middlewares/validateTokenHandler");

const router = express.Router({ mergeParams: true });

router.use(validateToken);

router.get("/", (req, res) => {
  res.status(200).json({ message: "Get all reviews" });
});
router.post("/");
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
