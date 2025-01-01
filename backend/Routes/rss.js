const express = require("express");
const router = express.Router();
const Blog = require("../models/blog.model");
const RSS = require("rss");

router.get("/", (req, res) => {
  const feed = new RSS({
    title: "Jim Chen's Blog",
    description: "Daily Journals and Tech Notes",
    feed_url: "https://jimchen.me/api/rss",
    site_url: "https://jimchen.me",
    language: "en",
    pubDate: new Date(),
    image_url: 'https://cdn.jimchen.me/87b658f1670b156212b695df197cce92/jimchen.me.png', 
  });
  
  Blog.find({isPrivate: false})
    .sort({ date: -1 })
    .collation({ locale: "en_US", numericOrdering: true })
    .then((blogs) => {
      blogs.forEach((blog) => {
        feed.item({
          title: blog.title,
          description: blog.body, // Full blog content
          url: `https://jimchen.me/${blog.language}/${blog.type}/${blog.title}`,
          guid: blog.uuid,
          categories: [blog.type],
          date: new Date(blog.date),
          language: blog.language,
        });
      });

      res.set({
        "Cache-Control": "public, max-age=86400",
      });

      res.header("Content-Type", "application/xml");
      res.send(feed.xml());
    })
    .catch((err) =>
      res.status(500).json({
        message: "Error generating RSS feed",
        error: err,
      })
    );
});

module.exports = router;
