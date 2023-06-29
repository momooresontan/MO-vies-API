const asyncHandler = require("express-async-handler");
const Movie = require("../models/movieModel");

exports.createMovieReview = asyncHandler(async (req, res) => {
  const { rating, comment, productId } = req.body;

  const review = {
    user: req.user._id,
    name: req.user.name,
    rating: Number(rating),
    comment,
  };
  res.status(200).json({ message: "Create a review" });
});
