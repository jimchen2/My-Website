const express = require('express');
const router = express.Router();
const Blog = require('../models/blog.model');

router.get('/', async (req, res) => {
    try {
        const blogs = await Blog.find({isPrivate: false})
            .sort({ date: -1 })
            .collation({ locale: 'en_US', numericOrdering: true });

        // Create previews and calculate type counts in one pass
        const previews = [];
        const typeCounts = {};

        blogs.forEach(blog => {
            // Create preview
            const preview = {
                ...blog.toObject(),
                body: blog.body.substring(0, 200)
            };
            previews.push(preview);

            // Count types
            typeCounts[blog.type] = (typeCounts[blog.type] || 0) + 1;
        });

        // Convert type counts to array and sort
        const postTypes = Object.entries(typeCounts)
            .map(([type, count]) => ({ type, count }))
            .sort((a, b) => b.count - a.count);

        res.set({
            'Cache-Control': 'public, max-age=604800'  // 1 week in seconds
        });

        res.json({
            previews,
            postTypes
        });
    } catch (err) {
        res.status(500).json({ message: 'Error fetching blog previews', error: err });
    }
});

module.exports = router;
