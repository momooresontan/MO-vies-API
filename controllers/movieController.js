exports.getAllMovies = async (req, res) => {
  res.status(200).json({ message: "Get all movies" });
};

exports.addMovie = async (req, res) => {
  res.status(200).json({ message: "Add a movie" });
};

exports.getMovieById = async (req, res) => {
  res.status(200).json({ message: "Get movie by id" });
};

exports.updateMovie = async (req, res) => {
  res.status(200).json({ message: "Update movie" });
};

exports.deleteMovie = async (req, res) => {
  res.status(200).json({ message: "Delete movie" });
};
