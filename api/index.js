const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const carRoute = require("./routes/car");
const authRoute = require("./routes/auth");

const app = express();

// configurations
dotenv.config();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// starting backend
app.listen(process.env.PORT || 5000, () => console.log("Backend is running"));

// connecting to db
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to db"))
  .catch((err) => console.log(err));

// using the routes
app.use("/api/cars", carRoute);
app.use("/api/auth", authRoute);
