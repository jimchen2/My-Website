const router = require("express").Router();
let comment = require("../Models/comment.model");

router.route("/get").get((req, res) => {
  comment
    .find()
    .sort({ _id: -1 })
    .then((comment) => res.json(comment))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/post").post((req, res) => {
  var user = req.body.user;
  var text = req.body.comment;
  var date = req.body.date;
  const newComment = new comment({ user, text, date });
  newComment
    .save()
    .then(() => res.json("Added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
