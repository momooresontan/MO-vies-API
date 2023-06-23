const express = require("express");
const dotenv = require("dotenv");
const movieRouter = require("./routes/movieRoute");

dotenv.config();

const app = express();

//Mounting routes
app.use("/api/v1/movies", movieRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
