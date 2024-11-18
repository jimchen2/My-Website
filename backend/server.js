require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Use environment variables
mongoose.connect(process.env.MONGODB_URI);
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

const PORT = process.env.PORT || 80;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
