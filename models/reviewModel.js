const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  comment: {
    type: String,
    required: [true, "User review required!"],
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "Review must belong to a user!"],
  },
  movie: {
    type: mongoose.Schema.ObjectId,
    ref: "Movie",
    required: [true, "Review must belong to a movie!"],
  },
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
