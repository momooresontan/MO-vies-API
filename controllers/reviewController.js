const asyncHandler = require("express-async-handler");
const Movie = require("../models/movieModel");
const Review = require("../models/reviewModel");

exports.setMovieUserIds = (req, res, next) => {
  //Allow Nested Routes
  if (!req.body.movie) req.body.movie = req.params.movieId;
  if (!req.body.user) req.body.user = req.user.id;
  next();
};

exports.createReview = asyncHandler(async (req, res) => {
  const { comment, rating, user, movie } = req.body;
  if (!comment || !rating || !user || !movie) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }
  const review = await Review.create({
    comment,
    rating,
    user,
    movie,
  });
  res.status(201).json(review);
});

exports.getAllReviews = asyncHandler(async (req, res) => {
  //To allow for NESTED GET REVIEWS on movie (hack)
  let filter = {};
  if (req.params.movieId) filter = { movie: req.params.movieId };

  const reviews = await Review.find(filter);

  res.status(200).json(reviews);
});
