const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/test");
app.use(require("cors")());
app.use(express.json());

const routes = [
  "/addliketoblog",
  "/comment",
  "/addliketocomment",
  "/visitinfo",
  "/blog",
  "/blogpreview",
  "/changechildid",
  "/getbloglikes",
  "/search",
];

routes.forEach((route) => app.use(route, require(`./Routes${route}`)));

app.listen(2840, () => console.log("Server running on port 2840"));
