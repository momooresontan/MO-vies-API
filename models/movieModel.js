const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  released: {
    type: String,
    required: true,
  },
  runtime: {
    type: Number,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  Genre: {
    type: String,
    required: true,
  },
});

const Movie = mongoose.Model("Movie", movieSchema);

module.exports = Movie;
