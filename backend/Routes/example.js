const router = require("express").Router();
let example = require("../Models/example.model");

router.route("/get").get((req, res) => {
  example
    .find()
    .sort({ _id: -1 })
    .then((example) => res.json(example))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/post").post((req, res) => {
  var country = req.body.country;
  var city = req.body.city;
  var region = req.body.region;
  var ip = req.body.ip;
  var browser = req.body.browser;
  var date = req.body.date;
  var now = req.body.now;
  const newexample = new example({
    date,
    country,
    region,
    city,
    ip,
    browser,
    now,
  });
  newexample
    .save()
    .then(() => res.json("Added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
