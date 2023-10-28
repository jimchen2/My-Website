const router = require("express").Router();
let blog = require("../Models/blog.model.js");

router.route("/").get((req, res) => {
  blog
    .find()
    .sort({ id: -1 })
    .then((blog) => res.json(blog))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
