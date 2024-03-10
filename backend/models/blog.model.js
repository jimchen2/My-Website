const mongoose = require("mongoose");
const { Schema } = mongoose;

const blogSchema = new Schema(
  {
    title: {
      type: String,
      default: "",
    },
    date: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "",
    },
    body: {
      type: String,
      default: "",
    },
  },
  { versionKey: false }
);

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
