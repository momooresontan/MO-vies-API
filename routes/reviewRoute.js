const express = require("express");
const {
  validateToken,
  restrictTo,
} = require("../middlewares/validateTokenHandler");
const {
  setMovieUserIds,
  createReview,
  getAllReviews,
} = require("../controllers/reviewController");

const router = express.Router({ mergeParams: true });

router.use(validateToken);

//POST /movie/12344ub4u/reviews

router.get("/", getAllReviews);
router.post("/", setMovieUserIds, createReview);
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
