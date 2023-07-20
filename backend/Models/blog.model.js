const mongoose = require("mongoose");

const { Schema } = mongoose;

const blogSchema = new Schema(
  {
    title: {
      type: String,
      default: "",
    },
    body: {
      type: String,
      default: "",
    },
    date: {
      type: String,
      default: "",
    },
    like: {
      type: Number,
      default: 0,
    },
  },
  { versionKey: false }
);

const blog = mongoose.model("blog", blogSchema);

module.exports = blog;
