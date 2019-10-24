const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  title: String,
  movie: String,
  author: String,
  body: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    hearts: Number,
  }
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
