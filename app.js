const express = require("express");
const cors = require("cors");
const app = express();
const student = require("./routes/student");
const book = require("./routes/book");

app.use(express.urlencoded({ extended: true }));
// Import Router

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "config/config.env" });
}
// Using Router

app.use(express.json());
app.use(cors());
app.use("/api/v1/", student);
app.use("/api/v1/", book);
module.exports = app;
