const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = 80;

app.use(cors());
app.use(express.json());

const uri = process.env.URI;
mongoose.connect(uri, {});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const userRouter = require("./Routes/example");
app.use("/example", userRouter);

const commentRouter = require("./Routes/comment");
app.use("/comment", commentRouter);


const blogRouter = require("./Routes/blog.js");
app.use("/blog", blogRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

