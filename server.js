const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const reviewRouter = require('./routes/reviewRouter');
const app = express();
const PORT = 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/movie/review', reviewRouter);
require('dotenv/config');

// Connect to MongoDB
mongoose.connect(
  process.env.REACT_APP_MONGO, { useNewUrlParser: true },
  () => console.log("MongoDB is connected")
);

// Enable CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});


// Get all reviews
app.get("/", (req, res) => {
  res.send('Hello World')
});

// Get one movie review
app.get("/review/:id", (req, res) => {
  res.send('review')
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
