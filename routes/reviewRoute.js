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

router.get("/", restrictTo("admin"), getAllReviews);
router.post("/", restrictTo("user"), setMovieUserIds, createReview);
router.get("/:id", restrictTo("admin"), getReviewById);
router.patch("/:id", restrictTo("user"), updateReview);
router.delete("/:id", restrictTo("user", "admin"), deleteReview);

module.exports = router;
