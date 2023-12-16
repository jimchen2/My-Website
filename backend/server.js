const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.URI);
const app = express();
app.use([require("cors")(), express.json()]);
[
  "/visitinfo",
  "/blog_id",
  "/comment",
  "/blog",
  "/addlike",
  "/addliketoblog",
  "/getvisitinfo",
  "/changechildid",
  "/log",
].forEach((route) => app.use(route, require(`./Routes${route}`)));
app.listen(5000);
