const express = require("express");
const port = 8000;

const app = express();

app.get("/profile", (req, res) => {
  res.send("<p>cool, it is running or is it !!</p>");
});

app.listen(port, (err) => {
  if (err) {
    console.log("error :", err);
  }
  console.log("yup !! express server is running on port", port);
});
