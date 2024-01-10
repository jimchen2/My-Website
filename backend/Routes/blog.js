const router = require("express").Router();
let Blog = require("../Models/blog.model.js");

// Route to get a specific blog by custom ID or all blogs if no ID is provided
router.route("/").get((req, res) => {
  const blogId = req.query.id;

  if (blogId) {
    // Fetch a specific blog by custom ID
    Blog.findOne({ id: blogId })
      .then(blog => {
        if (blog) {
          res.json(blog);
        } else {
          res.status(404).json({ message: "Blog not found" });
        }
      })
      .catch(err => res.status(500).json({ message: "Error: " + err }));
  } else {
    // Fetch all blogs when no ID is specified
    Blog.find()
      .sort({ id: -1 })
      .then(blogs => res.json(blogs))
      .catch(err => res.status(400).json("Error: " + err));
  }
});

module.exports = router;
