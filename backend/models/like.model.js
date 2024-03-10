const mongoose = require("mongoose");
const { Schema } = mongoose;

const likeSchema = new Schema({
  blog: {
    type: String,
    default: ""
  },
  like: {
    type: [String], // Assuming likes are user identifiers or IPs; empty array as default
    default: []
  }
}, { versionKey: false });

const Like = mongoose.model("Like", likeSchema);

module.exports = Like;
