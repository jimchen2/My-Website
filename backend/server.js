const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());
const uri = process.env.URI;

mongoose.connect(uri, {});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.use("/visitinfo", require("./Routes/visitinfo"));

app.use("/comment", require("./Routes/comment"));
app.use("/blog", require("./Routes/blog"));

app.use("/addlike", require("./Routes/addlike"));
app.use("/addliketoblog", require("./Routes/addliketoblog"));
app.use("/getvisitinfo", require("./Routes/getvisitinfo"));
app.use("/changechildid", require("./Routes/changechildid"));

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
