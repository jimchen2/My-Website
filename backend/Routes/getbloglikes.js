const express = require('express');
const router = express.Router();
const Like = require('../models/like.model'); // Ensure this path correctly leads to your Like model

// GET route to return the count of likes for a blog identified by a unique pointer
router.get('/', async (req, res) => {
  const { blogdate } = req.query;  // Retrieve the blog pointer from query parameters
  
  try {
    // Try to find the like document that corresponds to the given blog pointer
    const blogLikes = await Like.findOne({ blog: blogdate });
    const likesCount = blogLikes ? blogLikes.like.length : 0;

    // Respond with the likes count as JSON
    res.json({ count: likesCount });
  } catch (err) {
    // Log any errors that occur and respond with an error message and status code
    console.error(err);
    res.status(500).json({ message: "Error retrieving blog likes", error: err });
  }
});

// Export the router to be used in the main server file
module.exports = router;
