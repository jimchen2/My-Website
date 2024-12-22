const router = require("express").Router();
let visitinfo = require("../models/visitinfo.model"); // Changed the variable name here

router.route("/").get((req, res) => {
  let query = visitinfo.find().sort({ _id: -1 }); // Start with a query that fetches all documents sorted by _id in descending order
  if (req.query.num) {
    const num = parseInt(req.query.num, 10);
    if (!isNaN(num) && num >= 0) {
      query = query.limit(num);
    } else {
      return res.status(400).json("Error: num must be a positive integer when provided");
    }
  }
  query.then((visits) => res.json(visits)).catch((err) => res.status(400).json("Error: " + err));
});
router.route("/").post(async (req, res) => {
  try {
    const { ip, country, city, region, browser, date, now } = req.body;

    const existingVisitor = await visitinfo.findOne({ ip: ip });

    // Check if visitor exists and if enough time has passed
    if (!existingVisitor || Date.now() - existingVisitor.now >= 86400000) {
      const newVisit = new visitinfo({
        date,
        country,
        city,
        region,
        ip,
        browser,
        now,
      });

      await newVisit.save();
      res.json("Added!");
    } else {
      res.json("Recent visit exists");
    }
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
});

module.exports = router;
