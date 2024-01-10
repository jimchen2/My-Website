const mongoose = require("mongoose");

const { Schema } = mongoose;

const commentSchema = new Schema(
  {
    user: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
    date: {
      type: String,
      default: "",
    },
    //pointer to the new replies
    pointer: {
      type: Array,
      default: [],
    },
    //blog unique identifier
    blog: {
      type: String,
      default: " ",
    },
    like: {
      type: Array,
      default: [],
    },
  },
  { versionKey: false }
);

const comment = mongoose.model("comment", commentSchema);

module.exports = comment;
