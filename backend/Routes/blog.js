const express = require('express');
const router = express.Router();
const Blog = require('../models/blog.model');

// GET request to search for blog entries with optional 'date' and 'type' query parameters
router.get('/', (req, res) => {
  const { date, type } = req.query;

  let query = {};

  if (date) {
    query.date = date; // Keeping the date as a string
  }

  if (type) {
    query.type = type;
  }

  Blog.find(query)
    .then(blogs => res.json(blogs))
    .catch(err =>
      res.status(500).json({ message: 'Error fetching blogs', error: err })
    );
});

module.exports = router;
