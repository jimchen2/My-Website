const router = require("express").Router();
let Log = require("../Models/log.model.js");

// GET Route: Fetch all logs
router.get("/", (req, res) => {
  Log.find()
    .then(logs => res.json(logs))
    .catch(err => res.status(500).json({ message: err.message }));
});

// POST Route: Create a new log
router.post("/", (req, res) => {
  const newLog = new Log({
    body: req.body.body,
    date: req.body.date,
    pin: req.body.pin,
    type: req.body.type,
  });

  newLog
    .save()
    .then(() => res.json("Log added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

// PUT Route: Update an existing log
router.put("/:id", (req, res) => {
  Log.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(updatedLog => {
      if (!updatedLog) {
        return res.status(404).json({ message: "Log not found" });
      }
      res.json(updatedLog);
    })
    .catch(err => res.status(400).json({ message: err.message }));
});

// DELETE Route: Delete an existing log
router.delete("/:id", (req, res) => {
  Log.findByIdAndDelete(req.params.id)
    .then(() => res.json({ message: "Log deleted successfully!" }))
    .catch(err => res.status(400).json({ message: err.message }));
});

module.exports = router;
