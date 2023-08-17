const router = require("express").Router();
let comment = require("../Models/comment.model");

router.route("/").get((req, res) => {
  comment
    .find({ blog: req.query.blog })
    .sort({ _id: -1 })
    .then((comment) => res.json(comment))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/").post((req, res) => {
  var user = req.body.user;
  var text = req.body.comment;
  var date = req.body.date;
  var blog = req.body.blog || "00000000";
  //make it have a default value
  var like = req.body.like || [];
  //make it have a default value
  var pointer = [];

  const newComment = new comment({ user, text, date, pointer, blog, like });
  newComment
    .save()
    .then(() => res.json(newComment))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
