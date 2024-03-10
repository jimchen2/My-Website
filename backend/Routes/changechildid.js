const router = require("express").Router();
const Comment = require("../models/comment.model");

// PATCH route for updating comments by adding a childID to its pointer list
router.route("/").patch(async (req, res) => {
  try {
    const foundComment = await Comment.findById(req.body.parentid);

    if (!foundComment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    // Check if childID is provided in the request body
    if (!req.body.childid) {
      return res.status(400).json({ message: "childID is required" });
    }

    foundComment.pointer.push(req.body.childid);

    const updatedComment = await foundComment.save();
    res.json(updatedComment);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error updating comment" });
  }
});

module.exports = router;
