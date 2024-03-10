const mongoose = require("mongoose");
const { Schema } = mongoose;
const moment = require('moment-timezone');

const commentSchema = new Schema({
  user: {
    type: String,
    default: ""
  },
  text: {
    type: String,
    default: ""
  },
  date: {
    type: String,
    default: () => moment().tz("Asia/Shanghai").format('ddd MMM DD YYYY HH:mm:ss')
  },
  pointer: {
    type: [String], // Assuming pointers is an array of strings, with a default empty array
    default: []
  },
  blog: {
    type: String,
    default: " "
  },
  like: {
    type: [String],
    default: []
  }
}, { versionKey: false });

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
