const router = require("express").Router();
const Comment = require("../models/comment.model");
const mongoose = require("mongoose");

// PATCH route for updating comment likes based on a provided comment ID and IP address
router.patch("/", async (req, res) => {
  const { commentuuid } = req.query;
  const { userIP, isLiked } = req.body;

  if (userIP === "unknown" || userIP === "127.0.0.1") {
    return res.status(400).json({ message: "Cannot like comment from this IP" });
  }

  try {
    let query = {};
    if (commentuuid) {
      query.uuid = commentuuid;
    } else {
      return res.status(400).json({ message: "Invalid query parameters" });
    }

    const foundComment = await Comment.findOne(query);

    if (isLiked) {
      if (!foundComment.like.includes(userIP)) {
        foundComment.like.push(userIP);
      }
    } else {
      foundComment.like = foundComment.like.filter((ip) => ip !== userIP);
    }

    const updatedComment = await foundComment.save();
    res.json(updatedComment);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error updating comment" });
  }
});

module.exports = router;
