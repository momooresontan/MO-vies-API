const express = require("express");
const {
  getAllMovies,
  addMovie,
  getMovieById,
  updateMovie,
  deleteMovie,
} = require("../controllers/movieController");

const router = express.Router();

router.get("/", getAllMovies);
router.post("/", addMovie);
router.get("/:id", getMovieById);
router.put("/:id", updateMovie);
router.delete("/:id", deleteMovie);

module.exports = router;
