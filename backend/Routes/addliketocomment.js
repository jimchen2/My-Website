const router = require("express").Router();
const Comment = require("../models/comment.model");
const mongoose = require('mongoose');

// PATCH route for updating comment likes based on a provided comment ID and IP address
router.patch('/', async (req, res) => {
  const { commentid, dateString } = req.query;
  const { userIP, isLiked = true } = req.body;

  if (userIP === 'unknown' || userIP === '127.0.0.1') {
    return res.status(400).json({ message: "Cannot like comment from this IP" });
  }

  try {
    let query = {};
    if (commentid && mongoose.Types.ObjectId.isValid(commentid)) {
      query._id = commentid;
    } else if (dateString) {
      query.date = dateString; // Assuming 'date' is the field in your schema that stores the date string
    } else {
      return res.status(400).json({ message: "Invalid query parameters" });
    }

    const foundComments = await Comment.find(query);

    // Assuming you only expect to find one comment with the given criteria
    if (foundComments.length === 0) {
      return res.status(404).json({ message: "Comment not found" });
    }

    const foundComment = foundComments[0]; // Operate on the first found comment

    if (isLiked) {
      if (!foundComment.like.includes(userIP)) {
        foundComment.like.push(userIP);
      }
    } else {
      foundComment.like = foundComment.like.filter(ip => ip !== userIP);
    }

    const updatedComment = await foundComment.save();
    res.json(updatedComment);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error updating comment" });
  }
});

module.exports = router;
