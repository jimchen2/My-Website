const express = require('express');
const router = express.Router();
const Blog = require('../Models/blog.model'); // Adjust the path according to your project structure

// Route to get all blog IDs
router.get('/', async (req, res) => {
    try {
        const blogs = await Blog.find().select('id'); // Select only the '_id' field
        res.json(blogs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
