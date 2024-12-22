const express = require('express');
const router = express.Router();
const Blog = require('../models/blog.model');

// GET request to search for blog entries with optional 'date' and 'type' query parameters
router.get('/:language/:type/:title', (req, res) => {
  const { language, type, title } = req.params;

  Blog.find({ language, type, title })
    .then(blogs => {
      if (!blogs || blogs.length === 0) {
        return res.status(404).json({ message: 'Blog not found' });
      }
      res.json(blogs);
    })
    .catch(err =>
      res.status(500).json({ message: 'Error fetching blog', error: err })
    );
});


module.exports = router;
