const express = require("express");
const {
  validateToken,
  restrictTo,
} = require("../middlewares/validateTokenHandler");
const {
  setMovieUserIds,
  createReview,
  getAllReviews,
  getReviewById,
  updateReview,
  deleteReview,
} = require("../controllers/reviewController");

const router = express.Router({ mergeParams: true });

router.use(validateToken);

//POST /movie/12344ub4u/reviews

router.get("/", getAllReviews);
router.post("/", restrictTo("user"), setMovieUserIds, createReview);
router.get("/:id", getReviewById);
router.patch("/:id", updateReview);
router.delete("/:id", deleteReview);

module.exports = router;
