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
  },
  { versionKey: false }
);

const comment = mongoose.model("comment", commentSchema);

module.exports = comment;
