const moment = require('moment-timezone');

const router = require("express").Router();
const Comment = require("../models/comment.model");

// GET and POST routes for comments
router
  .route("/")
  .get(async (req, res) => {
    const { bloguuid } = req.query;

    try {
      let query = {};
      if (bloguuid && bloguuid !== "0") {
        query.blog = bloguuid;
      }

      let comments = await Comment.find(query)
      
      comments.sort((a, b) => {
        return moment(b.date, 'ddd MMM DD YYYY HH:mm:ss').valueOf() - 
               moment(a.date, 'ddd MMM DD YYYY HH:mm:ss').valueOf();
      });
      
      res.json(comments);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Error fetching comments" });
    }
  })
  .post(async (req, res) => {
    const { user, text, blog, uuid, blogname } = req.body;

    const newComment = new Comment({
      uuid,
      user,
      text,
      blog,
      blogname,
    });

    try {
      const savedComment = await newComment.save();
      res.status(201).json(savedComment);
    } catch (err) {
      console.error(err);
      res.status(400).json({ error: "Error creating comment" });
    }
  });

module.exports = router;
