const asyncHandler = require("express-async-handler");
const Movie = require("../models/movieModel");
const Review = require("../models/reviewModel");

exports.setMovieUserIds = (req, res, next) => {
  //Allow Nested Routes
  if (!req.body.movie) req.body.movie = req.params.movieId;
  if (!req.body.user) req.body.user = req.user.id;
  next();
};

exports.createMovieReview = asyncHandler(async (req, res) => {
  const { rating, comment, movieId } = req.body;

  const review = {
    user: req.user._id,
    name: req.user.name,
    rating: Number(rating),
    comment,
  };

  const movie = await Movie.findById(movieId);
  const isReviewed = await Review.find(
    (r) => r.user.toString() === req.user._id.toString()
  );

  res.status(200).json({ message: "Create a review" });
});
