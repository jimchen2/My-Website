const router = require("express").Router();
let blog = require("../Models/blog.model.js");

router.route("/get").get((req, res) => {
  blog
    .find()
    .sort({ _id: -1 })
    .then((blog) => res.json(blog))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/post").post((req, res) => {
  var title = req.body.title;
  var body = req.body.body;
  var date = req.body.date;
  const newBlog = new blog({ title, body, date });
  newBlog
    .save()
    .then(() => res.json("Added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
