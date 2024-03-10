const express = require("express");
const router = express.Router();
const Blog = require("../models/blog.model");

// Helper function to create a regex to escape special characters
function escapeRegex(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

// Helper function to get the relevant snippet from the body
function getRelevantSnippet(body, searchTerm, isTitleMatch) {
  if (isTitleMatch) {
    // Title matches, so return the first 150 characters of the body
    return body.substring(0, 150);
  } else {
    // Body matches, so find the search term and return 150 characters around it
    const index = body.toLowerCase().indexOf(searchTerm.toLowerCase());
    const start = Math.max(index - 75, 0);
    const end = Math.min(start + 150, body.length);
    return body.substring(start, end);
  }
}

// GET request to search blog entries by query string
router.get("/", (req, res) => {
  let { query } = req.query;
  if (!query) {
    return res.status(400).json({ message: "A search query is required." });
  }

  query = escapeRegex(query);
  const regex = new RegExp(query, "i"); // 'i' for case-insensitive search

  Blog.find()
    .then((blogs) => {
      const matches = blogs
        .map((blog) => {
          const isTitleMatch = regex.test(blog.title);
          const isBodyMatch = regex.test(blog.body);

          // Decide whether to get the snippet from the title or body
          const snippet = getRelevantSnippet(blog.body, query, isTitleMatch);

          return {
            ...blog.toObject(),
            body: snippet,
            isTitleMatch,
            isBodyMatch,
          };
        })
        .filter((blog) => blog.isTitleMatch || blog.isBodyMatch);

      res.json(matches);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "Error searching for blog entries", error: err });
    });
});

module.exports = router;
