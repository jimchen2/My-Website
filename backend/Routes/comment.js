const router = require("express").Router();
const Comment = require("../models/comment.model"); // Adjust path as necessary

// Combined route for getting and posting comments based on the blog date
router.route('/')
  .get(async (req, res) => {
    const { blogdate } = req.query;

    try {
      // Assume that 'date' corresponds to the date associated with comments for a blog
      let query = blogdate ? { blog: blogdate } : {};
      const comments = await Comment.find(query).sort({ _id: -1 });
      
      res.json(comments);
    } catch (err) {
      console.error(err);
      res.status(400).json("Error: " + err);
    }
  })
  .post(async (req, res) => {
    const { user, text, date, blog, like } = req.body;

    const newComment = new Comment({
      user,
      text,
      date,
      pointer: [], // Empty array if not provided
      blog,
      like: like || [], // Default to empty if not provided
    });

    try {
      await newComment.save();
      res.json(newComment);
    } catch (err) {
      console.error(err);
      res.status(400).json("Error: " + err);
    }
  });

module.exports = router;
