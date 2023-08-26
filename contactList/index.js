const express = require("express");
const port = 8000;
const path = require("path");
const app = express();

//setting a view engine
app.set("view engine", "ejs");

//setting view path
app.set("views", path.join(__dirname, "views"));

var contactList = [
  {
    name: "arpan",
    phone: "1111111101",
  },
  {
    name: "stark",
    phone: "1111111102",
  },
  {
    name: "coding ninja",
    phone: "1111111103",
  },
];
app.get("/", (req, res) => {
  //render ejs file
  return res.render("home", {
    title: "my contact list",
    contact_list: contactList,
  });
});

app.get("/practice", async (req, res) => {
  //render ejs file
  return res.render("practice", { title: "lets practice with ejs" });
});

app.post("/create-contact", function (req, res) {
  return res.redirect("/practice");
});

app.listen(port, (err) => {
  if (err) {
    console.log("error :", err);
  }
  console.log("yup !! express server is running on port", port);
});
