const express = require("express");

const { getSong } = require("../queries/songs.js");
const reviews = express.Router({ mergeParams: true });
const {
  getAllReviews,
  getReview,
  newReview,
  deleteReview,
  updateReview,
} = require("../queries/reviews");

// INDEX
reviews.get("/", async (req, res) => {
    const { songId } = req.params;
  
    try {
      const allReviews = await getAllReviews(songId);
      res.json(allReviews);
    } catch (err) {
      res.json(err);
    }
  });

// SHOW
reviews.get("/:id", async (req, res) => {
  const { id } = req.params;
  const review = await getReview(id);
  if (review) {
    res.json(review);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

// UPDATE
reviews.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedReview = await updateReview(id, req.body);
  if (updatedReview.id) {
    res.status(200).json(updatedReview);
  } else {
    res.status(404).json("Review not found");
  }
});

reviews.post("/", async (req, res) => {
  const review = await newReview(req.body);
  res.status(200).json(review);
});

// DELETE
reviews.delete("/:id", async (req, res) => {
  const { id } = req.params;

  const deletedReview = await deleteReview(id);
  if (deletedReview.id) {
    res.status(200).json(deletedReview);
  } else {
    res.status(404).json({ error: "Review not found" });
  }
});

// TEST JSON NEW
// {
//     "reviewer":"Lou",
//      "title": "Great song",
//      "content": "I loved the melody and lyrics",
//      "song_id": "2",
//      "rating": "4"
// }
module.exports = reviews;
