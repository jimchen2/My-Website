const router = require("express").Router();
const Comment = require("../Models/comment.model");

// GET route for fetching comments
router.route("/").get(async (req, res) => {
  try {
    const comments = await Comment.find({ blog: req.query.blog }).sort({
      _id: -1,
    });
    res.json(comments);
  } catch (err) {
    console.error(err);
    res.status(400).json("Error: " + err);
  }
});

// PATCH route for updating comments
router.route("/").patch(async (req, res) => {
  try {
    const foundComment = await Comment.findById(req.body.id);

    if (!foundComment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    if (req.body.isLiked) {
      // Only add the userIP if it's not already in the 'like' array
      if (!foundComment.like.includes(req.body.userIP)) {
        foundComment.like.push(req.body.userIP);
      }
    } else {
      // Filter out the userIP from the 'like' array
      foundComment.like = foundComment.like.filter(
        (ip) => ip !== req.body.userIP
      );
    }

    const updatedComment = await foundComment.save();
    res.json(updatedComment);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error updating comment" });
  }
});

module.exports = router;
