const express = require("express");
const app = express();
const ejs = require("ejs");
const { static } = require("express");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/response", (req, res) => {
  let { fullname, age } = req.query;
  console.log(req.query);
  res.render("respond.ejs", { fullname, age });
});

// app.get("/:name", (req, res) => {
//   let { name } = req.params;
//   res.render("person.ejs", { name });
// });

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
