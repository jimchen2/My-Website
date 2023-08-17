const mongoose = require("mongoose");

const { Schema } = mongoose;

const exampleSchema = new Schema(
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
    },
  },
  { versionKey: false }
);

const example = mongoose.model("visitinfo", exampleSchema);

module.exports = example;
