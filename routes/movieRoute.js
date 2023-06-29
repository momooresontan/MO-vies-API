const express = require("express");
const { restrictTo } = require("../middlewares/validateTokenHandler");
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
router.patch("/:id", restrictTo("admin"), updateMovie);
router.delete("/:id", restrictTo("admin"), deleteMovie);

module.exports = router;
