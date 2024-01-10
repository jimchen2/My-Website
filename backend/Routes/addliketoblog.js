const router = require("express").Router();
const Blog = require("../Models/blog.model");

// PATCH route for updating comments
router.route("/").patch(async (req, res) => {
  try {
    const foundBlog = await Blog.findById(req.body.id);

    if (!foundBlog) {
      return res.status(404).json({ message: "Comment not found" });
    }

    if (req.body.isLiked) {
      // Only add the userIP if it's not already in the 'like' array
      if (!foundBlog.like.includes(req.body.userIP)) {
        foundBlog.like.push(req.body.userIP);
      }
    } else {
      // Filter out the userIP from the 'like' array
      foundBlog.like = foundBlog.like.filter((ip) => ip !== req.body.userIP);
    }

    const updatedBlog = await foundBlog.save();
    res.json(updatedBlog);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error updating blog" });
  }
});

module.exports = router;
