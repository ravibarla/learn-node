const express = require("express");
const port = 8000;
const path = require("path");
const app = express();

//setting a view engine
app.set("view engine", "ejs");

//setting view path
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));

//middleware 1
app.use(function (req, res, next) {
  // console.log("middleware 1 called");
  req.myName = "ravi";
  next();
});

//middleware 2
app.use(function (req, res, next) {
  // console.log("middleware 2 called");
  console.log("getting from middleware 2 :", req.myName);
  next();
});

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
  //get values from middleware
  console.log("getting from get router controller :", req.myName);
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
  // return res.redirect("/practice");
  // console.log(req.body);
  // console.log(req.body.name);
  // console.log(req.body.phone);
  // contactList.push({
  //   name: req.body.name,
  //   phone: req.body.phone,
  // });
  contactList.push(req.body);
  return res.redirect("back");
});

app.listen(port, (err) => {
  if (err) {
    console.log("error :", err);
  }
  console.log("yup !! express server is running on port", port);
});
