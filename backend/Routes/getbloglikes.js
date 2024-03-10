const express = require("express");
const router = express.Router();
const Like = require("../models/like.model"); // Ensure this path correctly leads to your Like model

router.get("/", async (req, res) => {
  const { blogdate, isarray } = req.query; // Notice the lowercase 'isarray' to match the query parameter

  try {
    const blogLikes = await Like.findOne({ blog: blogdate });

    if (isarray === "true") {
      const likesArray = blogLikes ? blogLikes.like : [];
      res.json({ likes: likesArray });
    } else {
      const likesCount = blogLikes ? blogLikes.like.length : 0;
      res.json({ count: likesCount });
    }
  } catch (err) {
    console.error(`Error retrieving blog likes for blogdate: ${blogdate}`, err); // Log the error with the blogdate for context
    res
      .status(500)
      .json({ message: "Error retrieving blog likes", error: err });
  }
});

module.exports = router;
