const mongoose = require("mongoose");
const { Schema } = mongoose;

const visitInfoSchema = new Schema(
  {
    date: {
      type: String,
      default: "",
    },
    country: {
      type: String,
      default: "",
    },
    city: {
      type: String,
      default: "",
    },
    region: {
      type: String,
      default: "",
    },
    ip: {
      type: String,
      default: "",
    },
    browser: {
      type: String,
      default: "",
    },
    now: {
      type: Number,
      default: 0, // Assuming you want a default value, otherwise, you can remove the default part
    },
  },
  { versionKey: false }
);

const VisitInfo = mongoose.model("VisitInfo", visitInfoSchema);

module.exports = VisitInfo;
