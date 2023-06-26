const express = require("express");
const dotenv = require("dotenv");
const movieRouter = require("./routes/movieRoute");
const connectDB = require("./config/dbConnection");
const errorHandler = require("./middlewares/errorHandler");

dotenv.config();

connectDB();
const app = express();

//Middleware
app.use(express.json());

//Mounting routes
app.use("/api/v1/movies", movieRouter);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
