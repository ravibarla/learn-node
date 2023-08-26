const express = require("express");
const port = 8000;
const path = require("path");
const app = express();

//setting a view engine
app.set("view engine", "ejs");

//setting view path
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  return res.render("home");
});

app.listen(port, (err) => {
  if (err) {
    console.log("error :", err);
  }
  console.log("yup !! express server is running on port", port);
});
