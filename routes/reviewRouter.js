const express = require("express");
const router = express.Router();
const Model = require('../review.model');

// Get all reviews
router.get("/", async (req, res) => {
  try {
    const reviews = await Model.find();
    res.json(reviews)
  } catch (e) {
    res.json({ msg: e })
  }
});

// Get specific review
router.get("/:id", async (req, res) => {
  const { id } = req.params
  try {
    const review = await Model.findById(id);
    res.json(review)
  } catch (e) {
    res.json({ msg: e })
  }
});

// Create and post a review
router.post("/", async (req, res) => {
  console.log(req.body)
  const review = new Model({
    title: req.body.title,
    content: req.body.content
  })
  try {
    const saved = await review.save()
    res.json(saved)
  } catch (e) {
    res.json({ msg: e })
  }

});

// Delete selected post
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Model.findByIdAndDelete(id)
    res.json(deleted);
  } catch (e) {
    res.json({ message: `No review deleted by id: ${id}` });
  }
});

// Update selected post
router.patch("/:id", async (req, res) => {
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

module.exports = router;
