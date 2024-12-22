const mongoose = require("mongoose");
const { Schema } = mongoose;

const likeSchema = new Schema({
  parent: {
    type: String,
    default: ""
  },
  like: {
    type: [String], 
    default: []
  }
}, { versionKey: false });

const Like = mongoose.model("Like", likeSchema);

module.exports = Like;
