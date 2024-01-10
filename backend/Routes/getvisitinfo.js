const router = require("express").Router();
const geoip = require("geoip-lite");
const useragent = require("express-useragent");

router.route("/").get((req, res) => {
  const ip = (
    req.headers["x-forwarded-for"] ||
    req.connection.remoteAddress ||
    ""
  )
    .split(",")[0]
    .trim(); // Get the client's real IP

  res.json({
    ip: ip,
  });
});

module.exports = router;
