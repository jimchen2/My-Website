const router = require("express").Router();
const Like = require("../models/like.model");

// Assuming a PATCH route that adds a like to a blog identified by its date
router.patch("/", async (req, res) => {
  const { blogdate } = req.query;
  const { userIP } = req.body;

  // Reject 'unknown' or localhost IP addresses
  if (!userIP || userIP === 'unknown' || userIP === '127.0.0.1') {
    return res.status(400).json({ message: "Invalid IP address" });
  }

  try {
    // Check if a like document for this blog already exists
    const foundLike = await Like.findOne({ blog: blogdate });

    if (foundLike) {
      // Like document exists, update if IP has not already liked this blog
      if (!foundLike.like.includes(userIP)) {
        foundLike.like.push(userIP);
        await foundLike.save();
        res.json({ message: "Like added to existing blog" });
      } else {
        res.status(400).json({ message: "Blog already liked by this IP" });
      }
    } else {
      // Like document doesn't exist, create new like document for this blog
      const newLike = new Like({
        blog: blogdate,
        like: [userIP]
      });
      await newLike.save();
      res.json({ message: "Like added to new blog" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error updating blog likes" });
  }
});

module.exports = router;
