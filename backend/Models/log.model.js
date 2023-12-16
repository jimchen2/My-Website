const mongoose = require("mongoose");
const { Schema } = mongoose;

const logSchema = new Schema({
  body: {
    type: String,
    default: "",
  },
  date: {
    type: Date,
    default: Date.now, // Use Date.now to automatically set the current date and time
  },
  pin: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: "0",
  },
}, {
  versionKey: false
});

const Log = mongoose.model("Log", logSchema);

module.exports = Log;
