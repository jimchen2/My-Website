const router = require("express").Router();
let visitinfo = require("../Models/visitinfo.model"); // Changed the variable name here

router.route("/").get((req, res) => {
  visitinfo
    .find()
    .sort({ _id: -1 })
    .then((visits) => res.json(visits))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/").post((req, res) => {
  const { country, city, region, browser, date, now, ip } = req.body;

  const newVisit = new visitinfo({
    date,
    country,
    city,
    region,
    ip,
    browser,
    now,
  });

  newVisit
    .save()
    .then(() => res.json("Added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
