const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// const reviewRouter = require('./routes/reviewRouter');
const app = express();
const PORT = 3000;
const Model = require('./review.model');
const URL = process.env.REACT_APP_MONGO

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use('/movie/review', reviewRouter);
require('dotenv/config');

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://Travolta:Travolta1234@cluster0-t2ngh.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true },
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
// OR const cors = require('cors');
// app.use(cors());

// Get all reviews
app.get("/", (req, res) => {
  res.send('Hello World')
});

// Get one movie review
app.get("/review/:id", (req, res) => {
  res.send('review')
});

app.get("/movie/review", async (req, res) => {
  try {
    const reviews = await Model.find();
    res.json(reviews)
  } catch (e) {
    res.json({ msg: e })
  }
});

// Get specific review
app.get("/movie/review/:id", async (req, res) => {
  const { id } = req.params
  try {
    const review = await Model.findById(id);
    res.json(review)
  } catch (e) {
    res.json({ msg: e })
  }
});

// Create and post a review
app.post("/movie/review", async (req, res) => {
  // try {
    const review = new Model({
      title: req.body.title,
      score: req.body.score,
      content: req.body.content,
      img: req.body.img
    })
    console.log('review', review)
    review.save()
    .then(d => res.json(d))
    .catch(e => res.json({ msg: e })    )
});

// Delete selected post
app.delete("/movie/review/:id", async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Model.findByIdAndDelete(id)
    res.json(deleted);
  } catch (e) {
    res.json({ message: `No review deleted by id: ${id}` });
  }
});

// Update selected post
app.patch("/movie/review/:id", async (req, res) => {
  try {
    const { params: { id }, body: { title } } = req
    const updated = await Model.updateOne(
      { _id: id },
      { $set: { title: title } })
    res.json(updated);
  } catch (e) {
    res.json({ message: `No review found by id: ${id}` });
  }
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
