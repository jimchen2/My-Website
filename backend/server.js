require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Use environment variables
mongoose.connect(process.env.MONGODB_URI);
app.use(require("cors")());
app.use(express.json());

const routes = [
  "/blogtogglelike",
  "/comment",
  "/commenttogglelike",
  "/blog",
  "/blogpreview",
  "/changechildid",
  "/bloggetlikes",
  "/search",
  "/rss",
];

routes.forEach((route) => app.use(route, require(`./Routes${route}`)));

const PORT = process.env.PORT || 2840;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
