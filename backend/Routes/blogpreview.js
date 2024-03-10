const express = require('express');
const router = express.Router();
const Blog = require('../models/blog.model');

// GET request to fetch all blog entries with the body limited to the first 150 characters
router.get('/', (req, res) => {
    Blog.find({})
        .then(blogs => {
            const previews = blogs.map(blog => ({
                ...blog.toObject(),
                body: blog.body.substring(0, 150) // Limit body to first 150 characters
            }));
            res.json(previews);
        })
        .catch(err => res.status(500).json({ message: 'Error fetching blog previews', error: err }));
});

module.exports = router;
