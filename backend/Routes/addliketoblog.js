const router = require("express").Router();
const Like = require("../models/like.model");

router.patch("/", async (req, res) => {
  const { blogdate } = req.query;
  const { userIP, isLiked } = req.body;

  if (!userIP || userIP === "unknown" || userIP === "127.0.0.1") {
    return res.status(400).json({ message: "Invalid IP address" });
  }

  try {
    const foundLike = await Like.findOne({ blog: blogdate });

    if (foundLike) {
      const ipIndex = foundLike.like.indexOf(userIP);
      if (isLiked) {
        // Since isLiked is true, client wants to remove their like (dislike)
        if (ipIndex !== -1) {
          foundLike.like.splice(ipIndex, 1); // Remove the like
          await foundLike.save();
          res.json({ message: "Like removed" });
        } else {
          // Like doesn't exist to be removed
          res.status(400).json({ message: "Like not found for removal" });
        }
      } else {
        // Client wants to add a like
        if (ipIndex === -1) {
          foundLike.like.push(userIP);
          await foundLike.save();
          res.json({ message: "Like added" });
        } else {
          // Like already exists
          res.status(400).json({ message: "Blog already liked" });
        }
      }
    } else {
      // No likes document exists for this blog
      if (!isLiked) {
        const newLike = new Like({
          blog: blogdate,
          like: [userIP],
        });
        await newLike.save();
        res.json({ message: "Like added to new blog" });
      } else {
        // Can't remove a like from a blog that hasn't been liked
        res.status(400).json({ message: "No likes exist for this blog" });
      }
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error processing request" });
  }
});

module.exports = router;
