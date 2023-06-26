const asyncHandler = require("express-async-handler");
const Movie = require("../models/movieModel");

//@desc Get all movies
//@route GET /api/v1/movies
//@public

exports.getAllMovies = asyncHandler(async (req, res) => {
  const movies = await Movie.find();
  res.status(200).json(movies);
});

//@desc Add a movies
//@route POST /api/v1/movies
//@private

exports.addMovie = asyncHandler(async (req, res) => {
  const { title, released, runtime, year, genre } = req.body;
  if ((!title, !released, !runtime, !year, !genre)) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }
  const movie = await Movie.create({
    title,
    released,
    runtime,
    year,
    genre,
  });
  res.status(201).json(movie);
});

//@desc Get one movie
//@route GET /api/movies/:id
//@public

exports.getMovieById = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get movie by id" });
});

//@desc Update one movie
//@route PATCH /api/movies/:id
//@private

exports.updateMovie = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Update movie" });
});

//@desc Delete one movie
//@route DELETE /api/movies/:id
//@private

exports.deleteMovie = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Delete movie" });
});
