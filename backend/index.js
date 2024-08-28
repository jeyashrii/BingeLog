import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Movie } from "./models/movieModel.js";
import moviesRoute from "./routes/movieRoutes.js";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello");
});
app.use("/movies", moviesRoute);
mongoose
  .connect("mongodb://127.0.0.1:27017/movieList")
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`Server is listening on ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
