const express = require("express");
const router = express.Router();
const Blog = require("../models/blog.model");

function escapeRegex(text) {
  return text.replace(/[-[$${}()*+?.,\\^$|#\s]/g, "\\$&");
}

function getRelevantSnippet(body, searchTerm, isTitleMatch) {
  if (isTitleMatch) {
    return body.substring(0, 150);
  } else {
    const index = body.toLowerCase().indexOf(searchTerm.toLowerCase());
    const start = Math.max(index - 75, 0);
    const end = Math.min(start + 150, body.length);
    return body.substring(start, end);
  }
}

router.get("/", (req, res) => {
  let { query } = req.query;
  if (!query) {
    return res.status(400).json({ message: "A search query is required." });
  }

  query = escapeRegex(query);
  const regex = new RegExp(query, "i");

  Blog.find({isPrivate: false})
    .then((blogs) => {
      const matches = blogs
        .map((blog) => {
          const isTitleMatch = regex.test(blog.title);
          const isBodyMatch = regex.test(blog.body);
          const snippet = getRelevantSnippet(blog.body, query, isTitleMatch);

          return {
            ...blog.toObject(),
            body: snippet,
            isTitleMatch,
            isBodyMatch,
            // Add a random value for tie-breaking
            randomTieBreaker: Math.random()
          };
        })
        .filter((blog) => blog.isTitleMatch || blog.isBodyMatch)
        // Sort by date (descending) and use randomTieBreaker for same dates
        .sort((a, b) => {
          if (a.date !== b.date) {
            return b.date - a.date; // Sort by date descending
          }
          // If dates are equal, use the random tiebreaker
          return b.randomTieBreaker - a.randomTieBreaker;
        });

      res.json(matches);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "Error searching for blog entries", error: err });
    });
});

module.exports = router;
