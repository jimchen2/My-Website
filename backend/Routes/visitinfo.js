const router = require("express").Router();
let visitinfo = require("../models/visitinfo.model"); // Changed the variable name here

router.route("/").get((req, res) => {
  let query = visitinfo.find().sort({ _id: -1 }); // Start with a query that fetches all documents sorted by _id in descending order
  if (req.query.num) {
    const num = parseInt(req.query.num, 10);
    if (!isNaN(num) && num >= 0) {
      query = query.limit(num);
    } else {
      return res
        .status(400)
        .json("Error: num must be a positive integer when provided");
    }
  }
  query
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
